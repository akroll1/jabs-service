export const Config = {
  FIREBASE_JWT_ISS: process.env.FIREBASE_JWT_ISS as string,
  FS_PROD_MONGODB_URI: process.env.FS_PROD_MONGODB_URI as string,
  FS_DEV_MONGODB_URI: process.env.FS_DEV_MONGODB_URI || "",
  CLOUDFRONT_SECRET: process.env.CLOUDFRONT_SECRET as string,
  SES_EMAIL_SOURCE: process.env.SES_EMAIL_SOURCE as string,
  UNSUBSCRIBE_SECRET: process.env.UNSUBSCRIBE_SECRET as string,
  FS_SES_IDENTITY_ARN: process.env.FS_SES_IDENTITY_ARN as string,
  FEEDBACK_NOTIFY_EMAIL: process.env.FEEDBACK_NOTIFY_EMAIL as string,
};

// Required configs
if (!Config.FIREBASE_JWT_ISS) throw new Error("Warning: Please set FIREBASE_JWT_ISS.");
if (!Config.FS_PROD_MONGODB_URI) throw new Error("Warning: Please set FS_PROD_MONGODB_URI");
if (!Config.FS_DEV_MONGODB_URI) console.warn("Warning: Please set FS_DEV_MONGODB_URI.");
if (!Config.CLOUDFRONT_SECRET) throw new Error("Warning: Please set CLOUDFRONT_SECRET.");
if (!Config.SES_EMAIL_SOURCE) throw new Error("Warning: Please set SES_EMAIL_SOURCE.");
if (!Config.UNSUBSCRIBE_SECRET) throw new Error("Warning: Please set UNSUBSCRIBE_SECRET.");
if (!Config.FS_SES_IDENTITY_ARN) throw new Error("Warning: Please set FS_SES_IDENTITY_ARN.");