// types/global.d.ts
import mongoose from "mongoose";

// This export ensures this file is treated as a module, allowing global augmentation.
export {};

// 1. Define the Mongoose Cache interface here
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // 2. Add your Mongoose global variable
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;

  // 3. Keep your Express Request augmentation exactly as it was
  namespace Express {
    interface Request {
      auth: Record<string, string>;
      user: {
        sub: string;
        groups: string[];
        email: string;
      };
      headers: any;
      authorization: any;
      authToken: any;
      authId: string;
    }
  }
}