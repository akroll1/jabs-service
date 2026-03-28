import { Config } from "config";
import mongoose from "mongoose";

// 1. Define the shape of our cache
interface MongooseCache {
  conn: mongoose.Mongoose | null;
  promise: Promise<mongoose.Mongoose> | null;
}

// 2. Initialize the global variable if it doesn't exist yet.
// This prevents 'cached' from being undefined.
let cached = global.mongooseCache as MongooseCache;

if (!cached) {
  global.mongooseCache = { conn: null, promise: null };
  cached = global.mongooseCache;
}

export const connectToAtlas = async () => {
  // 3. Now 'cached' is guaranteed to be an object, so this check is safe.
  if (cached.conn) return cached.conn;

  // Wait for existing promise if connection is already starting
  if (!cached.promise) {
    const isProd = process.env.NODE_ENV === "production";

    const options: mongoose.ConnectOptions = {
      serverSelectionTimeoutMS: 5000,
      bufferCommands: false,
      maxPoolSize: isProd ? 2 : 10,
    };

    let connectionUri = "";

    // if (isProd) {
    if (isProd) {
      // --- LAMBDA MODE ---
      options.authMechanism = "MONGODB-AWS";
      options.authSource = "$external";
      connectionUri = Config.FS_PROD_MONGODB_URI;
    } else {
      // --- LOCAL MODE ---
      connectionUri = Config.FS_DEV_MONGODB_URI;
    }

    mongoose.set("strictQuery", true);

    cached.promise = mongoose
      .connect(connectionUri, options)
      .then((mongooseInstance) => mongooseInstance)
      .catch((err) => {
        console.error("Mongo Connection Failed:", err);
        // Important: Reset the promise so we can retry on the next call
        cached.promise = null;
        throw err;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
};
