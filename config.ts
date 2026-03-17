export const Config = {
  FS_AWS_ACCESS_KEY_ID: process.env.FS_AWS_ACCESS_KEY_ID as string,
  FS_AWS_SECRET_KEY: process.env.FS_AWS_SECRET_KEY as string,
  FS_AWS_REGION: process.env.FS_AWS_REGION as string,
  FIREBASE_JWT_ISS: process.env.FIREBASE_JWT_ISS as string,
  PROD_MONGODB_URI: process.env.PROD_MONGODB_URI as string,
  DEV_MONGODB_URI: process.env.DEV_MONGODB_URI || "",
  CLOUDFRONT_SECRET: process.env.CLOUDFRONT_SECRET as string,
  SES_EMAIL_SOURCE: process.env.SES_EMAIL_SOURCE as string,
  UNSUBSCRIBE_SECRET: process.env.UNSUBSCRIBE_SECRET as string,
};

// Required configs
if (!Config.FS_AWS_ACCESS_KEY_ID) throw new Error("Warning: Please set AWS_ACCESS_KEY_ID.");
if (!Config.FS_AWS_SECRET_KEY) throw new Error("Warning: Please set AWS_SECRET_KEY.");
if (!Config.FS_AWS_REGION) throw new Error("Warning: Please set AWS_REGION.");
if (!Config.FIREBASE_JWT_ISS) throw new Error("Warning: Please set FIREBASE_JWT_ISS.");
if (!Config.PROD_MONGODB_URI) throw new Error("Warning: Please set PROD_MONGODB_URI");
if (!Config.DEV_MONGODB_URI) console.warn("Warning: Please set DEV_MONGODB_URI.");
if (!Config.CLOUDFRONT_SECRET) throw new Error("Warning: Please set CLOUDFRONT_SECRET.");
if (!Config.SES_EMAIL_SOURCE) throw new Error("Warning: Please set SES_EMAIL_SOURCE.");
if (!Config.UNSUBSCRIBE_SECRET) throw new Error("Warning: Please set UNSUBSCRIBE_SECRET.");