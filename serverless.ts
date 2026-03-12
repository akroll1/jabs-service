import type { AWS } from '@serverless/typescript';
import { jabsSubscribe, jabsUnsubscribe } from '@/functions/jabs-service';

export const serverlessConfiguration: AWS = {
  service: 'jabs-service',
  frameworkVersion: '4',
  plugins: ['serverless-offline', 'serverless-stack-output'],
  provider: {
    name: 'aws',
    stage: 'v1',
    runtime: 'nodejs24.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      FSL_AWS_ACCESS_KEY_ID: "${file(.env.json):FSL_AWS_ACCESS_KEY_ID}",
      FSL_AWS_SECRET_KEY: "${file(.env.json):FSL_AWS_SECRET_KEY}",
      FSL_AWS_REGION: "${file(.env.json):FSL_AWS_REGION}",
      FIREBASE_JWT_ISS: "${file(.env.json):FIREBASE_JWT_ISS}",
      FSL_DEV_MONGODB_URI: "${file(.env.json):FSL_DEV_MONGODB_URI}",
      FSL_PROD_MONGODB_URI: "${file(.env.json):FSL_PROD_MONGODB_URI}",
      CLOUDFRONT_SECRET: "${file(.env.json):CLOUDFRONT_SECRET}",
      SES_EMAIL_SOURCE: "${file(.env.json):SES_EMAIL_SOURCE}",
    },
    iamRoleStatements: [
      {
        Effect: "Allow",
        Action: [
          "ses:SendEmail",
          "ses:SendRawEmail"
        ],
        Resource: "arn:aws:ses:us-east-1:896748474789:identity/fightsync.app"
      } 
    ],
  },
  // import the function via paths
  functions: { jabsSubscribe, jabsUnsubscribe },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node24',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    output: {
        file: "./data.json",
        stage: "v1",
        "serverless-offline": {
          "lambdaPort": 40888,
        },
        "chatService": "FSL-CHAT"
    }
  },
};

module.exports = serverlessConfiguration;
