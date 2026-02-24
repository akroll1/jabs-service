import type { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from "aws-lambda"
import type { FromSchema } from "json-schema-to-ts";
import { getCorsOrigin } from "./get-cors-origin";
import { JSONResponse } from "@/common";

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & { body: FromSchema<S> }
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<ValidatedAPIGatewayProxyEvent<S>, APIGatewayProxyResult>

export const formatJSONResponse = (response: JSONResponse): Record<string, any> => {
  
  const corsOrigin = getCorsOrigin(response?.origin || "");

  return {
    statusCode: response?.statusCode || 200,
    headers: {
      'Content-Type': 'application/json',
      'Content-Security-Policy': "default-src 'none'; frame-ancestors 'none';",
      'Access-Control-Allow-Origin': corsOrigin,
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': 'GET, PUT, HEAD, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Origin-Secret, x-origin-secret, X-Requested-With, Origin, Referer-Policy, User-Agent',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
    body: JSON.stringify({
      ...(response.message && { message: response.message })
    })
  }
}
