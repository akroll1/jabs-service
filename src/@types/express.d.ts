// types/express.d.ts (or wherever you keep this)

// This export ensures this file is treated as a module, allowing global augmentation.
export const foo = "foo";

declare global {
  namespace Express {
    interface Request {
      // 1. We replace 'auth: any' with your specific type
      auth: Record<string, string>;

      // 2. Your other custom properties remain
      user: {
        sub: string;
        groups: string[];
        email: string;
      };

      // 3. You can likely refine these 'any' types later, but they are fine for now
      headers: any;
      authorization: any;
      authToken: any;
      authId: string;
    }
  }
}
