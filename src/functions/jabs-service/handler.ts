import serverless from 'serverless-http';
import app from '@/app';
import { connectToAtlas } from '@/libs/connect-to-atlas';
import { cornerInviteHandler, fightNightInviteHandler, internalUnsubscribeHandler, subscribeHandler, welcomeHandler } from '@/controllers/jabs/controller-handlers';

const serverlessHandler = serverless(app);

type DirectRoute = '/jabs/subscribe' | '/jabs/unsubscribe' | '/jabs/welcome' | '/jabs/corner-invite' | '/jabs/fight-night-invite';

interface LambdaInvokePayload {
  route: DirectRoute;
  body: Record<string, any>;
}

type RouteHandler = (body: Record<string, any>) => Promise<{ statusCode: number; message: string }>;

const routeHandlers: Record<DirectRoute, RouteHandler> = {
  '/jabs/subscribe': subscribeHandler,
  '/jabs/unsubscribe': internalUnsubscribeHandler,
  '/jabs/welcome': welcomeHandler,
  '/jabs/corner-invite': cornerInviteHandler,
  '/jabs/fight-night-invite': fightNightInviteHandler,
};

async function handleDirectInvoke(event: LambdaInvokePayload) {
  await connectToAtlas();

  const handler = routeHandlers[event.route];

  if (!handler) return { statusCode: 404, message: `Unknown route: ${event.route}` };

  return handler(event.body ?? {});
}

export const main = async (event: any, context: any) => {
  // console.log('Received event:', JSON.stringify(event));
  // Direct Lambda-to-Lambda invocation — no requestContext, no CloudFront secret required
  if (!event.requestContext) return handleDirectInvoke(event as LambdaInvokePayload);

  // HTTP event via API Gateway — goes through Express (CloudFront secret enforced)
  return serverlessHandler(event, context);
};