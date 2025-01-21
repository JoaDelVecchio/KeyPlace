import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import AppError from "../lib/AppError";
import { JWT_SECRET_KEY } from "../config";
import { UserAuthInfoRequest } from "@/types/express";

const verifyToken = (
  req: UserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      throw new AppError("You are not authenticated", 401);
    }

    jwt.verify(token, JWT_SECRET_KEY, (err: any, payload: any) => {
      if (err) {
        throw new AppError("Token not valid", 403);
      }

      req.userId = payload.id; // TypeScript should now recognize `userId`
      next();
    });
  } catch (error) {
    next(error);
  }
};

export default verifyToken;
