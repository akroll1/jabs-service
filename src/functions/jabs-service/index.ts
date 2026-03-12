import { handlerPath } from 'src/libs/handler-resolver';

export const jabsSubscribe = {
  handler: `${handlerPath(__dirname)}/handler.subscribe`,
  events: [
    {
      http: {
        method: 'put',
        path: 'jabs/subscribe',
      },
    },
    {
      http: {
        method: 'options',
        path: 'jabs/subscribe',
      },
    },
  ],
};

export const jabsUnsubscribe = {
  handler: `${handlerPath(__dirname)}/handler.unsubscribe`,
  events: [
    {
      http: {
        method: 'put',
        path: 'jabs/unsubscribe',
      },
    },
    {
      http: {
        method: 'options',
        path: 'jabs/unsubscribe',
      },
    },
  ],
};
