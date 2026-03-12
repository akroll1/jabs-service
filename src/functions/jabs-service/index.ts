import { handlerPath } from 'src/libs/handler-resolver';

export const jabsService = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      httpApi: {
        method: 'ANY',
        path: '/jabs/{proxy+}',
      },
    },
  ],
};
