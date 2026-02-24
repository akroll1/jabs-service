export const Config = {
  FSL_AWS_ACCESS_KEY_ID: process.env.FSL_AWS_ACCESS_KEY_ID as string,
  FSL_AWS_SECRET_KEY: process.env.FSL_AWS_SECRET_KEY as string,
  FSL_AWS_REGION: process.env.FSL_AWS_REGION as string,
  FIREBASE_JWT_ISS: process.env.FIREBASE_JWT_ISS as string,
  FSL_PROD_MONGODB_URI: process.env.FSL_PROD_MONGODB_URI as string,
  FSL_DEV_MONGODB_URI: process.env.FSL_DEV_MONGODB_URI || "",
  CLOUDFRONT_SECRET: process.env.CLOUDFRONT_SECRET as string,
  SES_EMAIL_SOURCE: process.env.SES_EMAIL_SOURCE as string,
};

// Required configs
if (!Config.FSL_AWS_ACCESS_KEY_ID) throw new Error("Warning: Please set FSL_AWS_ACCESS_KEY_ID.");
if (!Config.FSL_AWS_SECRET_KEY) throw new Error("Warning: Please set FSL_AWS_SECRET_KEY.");
if (!Config.FSL_AWS_REGION) throw new Error("Warning: Please set FSL_AWS_REGION.");
if (!Config.FIREBASE_JWT_ISS) throw new Error("Warning: Please set FIREBASE_JWT_ISS.");
if (!Config.FSL_PROD_MONGODB_URI) throw new Error("Warning: Please set FSL_PROD_MONGODB_URI");
if (!Config.FSL_DEV_MONGODB_URI) console.warn("Warning: FSL_DEV_MONGODB_URI is not set.");
if (!Config.CLOUDFRONT_SECRET) throw new Error("Warning: Please set CLOUDFRONT_SECRET.");
if (!Config.SES_EMAIL_SOURCE) throw new Error("Warning: Please set SES_EMAIL_SOURCE.");