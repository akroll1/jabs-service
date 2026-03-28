import { handlerPath } from 'src/libs/handler-resolver';

export const jabsService = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      httpApi: {
        method: 'POST',
        path: '/jabs/{proxy+}',
      },
    },
    {
      httpApi: {
        method: 'DELETE',
        path: '/jabs/{proxy+}',
      },
    },
  ],
};
