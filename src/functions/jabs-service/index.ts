import { handlerPath } from 'src/libs/handler-resolver';

export const jabsService = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  // No HTTP events: public traffic arrives on the Lambda function URL, which is
  // AWS_IAM-authed and reachable only through the CloudFront OAC on /jabs/*.
  // Internal callers (fsai-api-v1) use lambda:InvokeFunction directly.
  events: [],
};
