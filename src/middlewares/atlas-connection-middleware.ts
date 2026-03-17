
import type { NextFunction, Request, Response } from "express";
import { connectToAtlas } from "../libs/connect-to-atlas";

export const atlasConnectionMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await connectToAtlas();
    next();
  } catch (error) {
    console.error("Database Connection Failed", error);
    res.status(500).send("Database Error");
  }
};
