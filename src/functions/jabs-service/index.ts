import { handlerPath } from 'src/libs/handler-resolver';

export const jabsService = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'put',
        path: 'jabs/{type}',
      },
    },
    {
      http: {
        method: 'options',
        path: 'jabs/{type}',
      },
    },
  ],
};
