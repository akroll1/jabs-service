import type { AWS } from '@serverless/typescript';
import { jabsService } from '@/functions/jabs-service';

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
      NODE_ENV: "production",
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      // No AWS credentials here: Lambda injects credentials for the execution
      // role into the container and the SDK's default chain picks them up.
      FIREBASE_JWT_ISS: "${file(.env.json):FIREBASE_JWT_ISS}",
      FS_DEV_MONGODB_URI: "${file(.env.json):FS_DEV_MONGODB_URI}",
      FS_PROD_MONGODB_URI: "${file(.env.json):FS_PROD_MONGODB_URI}",
      CLOUDFRONT_SECRET: "${file(.env.json):CLOUDFRONT_SECRET}",
      SES_EMAIL_SOURCE: "${file(.env.json):SES_EMAIL_SOURCE}",
      FEEDBACK_NOTIFY_EMAIL: "${file(.env.json):FEEDBACK_NOTIFY_EMAIL}",
      UNSUBSCRIBE_SECRET: "${file(.env.json):UNSUBSCRIBE_SECRET}",
      FS_SES_IDENTITY_ARN: "${file(.env.json):FS_SES_IDENTITY_ARN}",
    },
    iamRoleStatements: [
      {
        Effect: "Allow",
        Action: [
          "ses:SendEmail",
          "ses:SendRawEmail"
        ],
        Resource: "${file(.env.json):FS_SES_IDENTITY_ARN}"
      }
    ],
  },
  // import the function via paths
  functions: { jabsService },
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
    }
  },
};

module.exports = serverlessConfiguration;
