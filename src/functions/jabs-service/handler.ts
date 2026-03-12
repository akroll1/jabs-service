
import { formatJSONResponse } from "src/libs/api-gateway"
import { middyfy } from "src/libs/lambda";
import { Config } from "../../../config"

import { APIGatewayProxyResult } from 'aws-lambda';
import { validateCloudFrontSecret } from './helpers';
import { connectToAtlas } from 'src/libs/connect-to-atlas';
import { JabType } from '@/common';
import { JabsService } from '@/services/jabs/jabs.service';

const { CLOUDFRONT_SECRET } = Config;
const jabsService = new JabsService();
const validJabTypes = new Set(Object.values(JabType));

type LambdaEvent = AWSLambda.APIGatewayProxyEvent | AWSLambda.APIGatewayProxyEventV2;

// ============================================================
// SHARED: Validates CloudFront secret, parses body, checks email & type.
// Returns the parsed fields or a formatted error response.
// ============================================================
function validateRequest(event: LambdaEvent):
  | { ok: true; origin: string; email: string; type: JabType }
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

  if (!body) return { ok: false, response: formatJSONResponse({ statusCode: 400, origin, message: 'Missing request body' }) as APIGatewayProxyResult };

  const email = body?.email as string | undefined;
  if (!email) return { ok: false, response: formatJSONResponse({ statusCode: 400, origin, message: 'Missing required field: email' }) as APIGatewayProxyResult };

  const type = body?.type as JabType | undefined;
  if (!type || !validJabTypes.has(type)) return { ok: false, response: formatJSONResponse({ statusCode: 400, origin, message: 'Missing or invalid field: type' }) as APIGatewayProxyResult };

  return { ok: true, origin, email, type };
}

// ============================================================
// PUT /jabs/subscribe
// ============================================================
const subscribeHandler = async (event: LambdaEvent): Promise<APIGatewayProxyResult> => {
  const origin = event.headers?.origin || event.headers?.Origin || '';

  const httpMethod = 'httpMethod' in event ? event.httpMethod : event.requestContext?.http?.method;
  if (httpMethod === 'OPTIONS') return formatJSONResponse({ statusCode: 200, origin, message: 'OK' }) as APIGatewayProxyResult;

  const validated = validateRequest(event);
  if (!validated.ok) return validated.response;

  const { email, type } = validated;

  try {
    await connectToAtlas();
    const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    const created = await jabsService.subscribeToType({ ...body, email, type });

    if (!created) return formatJSONResponse({ statusCode: 500, origin: validated.origin, message: 'Failed to create jab subscription.' }) as APIGatewayProxyResult;

    return formatJSONResponse({ statusCode: 200, origin: validated.origin, message: 'Subscribed!' }) as APIGatewayProxyResult;
  } catch (err) {
    return formatJSONResponse({ statusCode: 500, origin: validated.origin, message: `Error: ${err instanceof Error ? err.message : JSON.stringify(err)}` }) as APIGatewayProxyResult;
  }
};

// ============================================================
// PUT /jabs/unsubscribe
// ============================================================
const unsubscribeHandler = async (event: LambdaEvent): Promise<APIGatewayProxyResult> => {
  const origin = event.headers?.origin || event.headers?.Origin || '';

  const httpMethod = 'httpMethod' in event ? event.httpMethod : event.requestContext?.http?.method;
  if (httpMethod === 'OPTIONS') return formatJSONResponse({ statusCode: 200, origin, message: 'OK' }) as APIGatewayProxyResult;

  const validated = validateRequest(event);
  if (!validated.ok) return validated.response;

  const { email, type } = validated;

  try {
    await connectToAtlas();
    await jabsService.unsubscribeFromType(email, type);

    return formatJSONResponse({ statusCode: 200, origin: validated.origin, message: 'Unsubscribed!' }) as APIGatewayProxyResult;
  } catch (err) {
    return formatJSONResponse({ statusCode: 500, origin: validated.origin, message: `Error: ${err instanceof Error ? err.message : JSON.stringify(err)}` }) as APIGatewayProxyResult;
  }
};

export const subscribe = middyfy(subscribeHandler);
export const unsubscribe = middyfy(unsubscribeHandler);
