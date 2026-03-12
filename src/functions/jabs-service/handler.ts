
import { formatJSONResponse } from "src/libs/api-gateway"
import { middyfy } from "src/libs/lambda";
import { Config } from "../../../config"

import { APIGatewayProxyResult } from 'aws-lambda';
import { validateCloudFrontSecret } from './helpers';
import { connectToAtlas } from 'src/libs/connect-to-atlas';
import { JabType } from '@/common';
import { JabsService } from '@/services/jabs/jabs.service';
import { verifyUnsubscribeToken } from '@/libs/unsubscribe-token';

const { CLOUDFRONT_SECRET, UNSUBSCRIBE_SECRET } = Config;
const jabsService = new JabsService();
const validJabTypes = new Set(Object.values(JabType));

type LambdaEvent = AWSLambda.APIGatewayProxyEvent | AWSLambda.APIGatewayProxyEventV2;

// ============================================================
// SHARED: Validates CloudFront secret and parses body.
// ============================================================
function validateCloudFront(event: LambdaEvent):
  | { ok: true; origin: string; body: Record<string, unknown> }
  | { ok: false; response: APIGatewayProxyResult }
{
  const origin = event.headers?.origin || event.headers?.Origin || '';

  const secretIsValid = validateCloudFrontSecret(event?.headers, CLOUDFRONT_SECRET);
  if (!secretIsValid) {
    const ip =
      ('identity' in event.requestContext
        ? event.requestContext.identity?.sourceIp
        : event.requestContext?.http?.sourceIp);
    console.warn(`🛑 Blocked Spoofed Request. IP: ${ip}`);
    return {
      ok: false,
      response: formatJSONResponse({ statusCode: 403, origin, message: 'Forbidden: Invalid Origin Secret' }) as APIGatewayProxyResult,
    };
  }

  const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
  if (!body) {
    return { ok: false, response: formatJSONResponse({ statusCode: 400, origin, message: 'Missing request body' }) as APIGatewayProxyResult };
  }

  return { ok: true, origin, body };
}

// ============================================================
// PUT /jabs/subscribe
// ============================================================
const subscribeHandler = async (event: LambdaEvent): Promise<APIGatewayProxyResult> => {
  const origin = event.headers?.origin || event.headers?.Origin || '';

  const httpMethod = 'httpMethod' in event ? event.httpMethod : event.requestContext?.http?.method;
  if (httpMethod === 'OPTIONS') return formatJSONResponse({ statusCode: 200, origin, message: 'OK' }) as APIGatewayProxyResult;

  const validated = validateCloudFront(event);
  if (!validated.ok) return validated.response;

  const { body } = validated;

  const email = body?.email as string | undefined;
  if (!email) return formatJSONResponse({ statusCode: 400, origin: validated.origin, message: 'Missing required field: email' }) as APIGatewayProxyResult;

  const type = body?.type as JabType | undefined;
  if (!type || !validJabTypes.has(type)) return formatJSONResponse({ statusCode: 400, origin: validated.origin, message: 'Missing or invalid field: type' }) as APIGatewayProxyResult;

  try {
    await connectToAtlas();
    const created = await jabsService.subscribeToType({ ...body, email, type });

    if (!created) return formatJSONResponse({ statusCode: 500, origin: validated.origin, message: 'Failed to create jab subscription.' }) as APIGatewayProxyResult;

    return formatJSONResponse({ statusCode: 200, origin: validated.origin, message: 'Subscribed!' }) as APIGatewayProxyResult;
  } catch (err) {
    return formatJSONResponse({ statusCode: 500, origin: validated.origin, message: `Error: ${err instanceof Error ? err.message : JSON.stringify(err)}` }) as APIGatewayProxyResult;
  }
};

// ============================================================
// PUT /jabs/unsubscribe
// Accepts { token } — a signed token generated at email-send time.
// ============================================================
const unsubscribeHandler = async (event: LambdaEvent): Promise<APIGatewayProxyResult> => {
  const origin = event.headers?.origin || event.headers?.Origin || '';

  const httpMethod = 'httpMethod' in event ? event.httpMethod : event.requestContext?.http?.method;
  if (httpMethod === 'OPTIONS') return formatJSONResponse({ statusCode: 200, origin, message: 'OK' }) as APIGatewayProxyResult;

  const validated = validateCloudFront(event);
  if (!validated.ok) return validated.response;

  const { body } = validated;

  const token = body?.token as string | undefined;
  if (!token) return formatJSONResponse({ statusCode: 400, origin: validated.origin, message: 'Missing required field: token' }) as APIGatewayProxyResult;

  const payload = verifyUnsubscribeToken(token, UNSUBSCRIBE_SECRET);
  if (!payload) return formatJSONResponse({ statusCode: 401, origin: validated.origin, message: 'Invalid or expired unsubscribe token' }) as APIGatewayProxyResult;

  try {
    await connectToAtlas();
    await jabsService.unsubscribeFromType(payload.email, payload.type);

    return formatJSONResponse({ statusCode: 200, origin: validated.origin, message: 'Unsubscribed!' }) as APIGatewayProxyResult;
  } catch (err) {
    return formatJSONResponse({ statusCode: 500, origin: validated.origin, message: `Error: ${err instanceof Error ? err.message : JSON.stringify(err)}` }) as APIGatewayProxyResult;
  }
};

export const subscribe = middyfy(subscribeHandler);
export const unsubscribe = middyfy(unsubscribeHandler);
