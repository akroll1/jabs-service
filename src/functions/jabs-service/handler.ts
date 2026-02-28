
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

const jabsHandler = async (
  event: AWSLambda.APIGatewayProxyEvent | AWSLambda.APIGatewayProxyEventV2,
): Promise<APIGatewayProxyResult> => {

  const origin = event.headers?.origin || event.headers?.Origin || '';

  // Handle CORS preflight
  const httpMethod =
    'httpMethod' in event ? event.httpMethod : event.requestContext?.http?.method;
  if (httpMethod === 'OPTIONS') {
    return formatJSONResponse({
      statusCode: 200,
      origin,
      message: 'OK',
    }) as APIGatewayProxyResult;
  }

  // ============================================================
  // 🛡️ 1. ORIGIN VERIFICATION (CloudFront Spoofing Protection)
  // ============================================================
  const secretIsValid = validateCloudFrontSecret(event?.headers, CLOUDFRONT_SECRET);

  if (!secretIsValid) {
    const ip =
      ('identity' in event.requestContext
        ? event.requestContext.identity?.sourceIp
        : event.requestContext?.http?.sourceIp);
    console.warn(`🛑 Blocked Spoofed Request. IP: ${ip}`);

    return formatJSONResponse({
      statusCode: 403,
      origin,
      message: `Forbidden: Invalid Origin Secret`,
    }) as APIGatewayProxyResult;
  }
  // ============================================================
  // 2. VALIDATE PATH PARAMETER & BODY
  // ============================================================
  const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;

  if (!body) {
    return formatJSONResponse({
      statusCode: 400,
      origin,
      message: `Missing request body`,
    }) as APIGatewayProxyResult;
  }

  const email = body?.email as string | undefined;

  if (!email) {
    return formatJSONResponse({
      statusCode: 400,
      origin,
      message: 'Missing required field: email',
    }) as APIGatewayProxyResult;
  }

  // ============================================================
  // 3. SUBSCRIBE
  // ============================================================
  try {
    await connectToAtlas();
    const created = await jabsService.subscribeToType(body);

    if (!created) {
      return formatJSONResponse({
        statusCode: 500,
        origin,
        message: 'Failed to create jab subscription.',
      }) as APIGatewayProxyResult;
    }

    return formatJSONResponse({
      statusCode: 200,
      origin,
      message: "Jab created!",
    }) as APIGatewayProxyResult;

  } catch(err) {
    return formatJSONResponse({
      statusCode: 500,
      origin,
      message: `Error: ${err instanceof Error ? err.message : JSON.stringify(err)}`,
    }) as APIGatewayProxyResult;
  }
};

export const main = middyfy(jabsHandler);