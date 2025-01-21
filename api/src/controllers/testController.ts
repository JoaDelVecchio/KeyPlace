import { Request, Response, NextFunction } from "express";
import AppError from "../lib/AppError";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config";

export const shouldBeLoggedIn = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("You are authenticated");
    res.status(200).json({ message: "You are authenticated" });
  } catch (error) {
    next(error);
  }
};

export const shouldBeAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;

    if (!token) throw new AppError("Not authenticated.", 401);

    jwt.verify(token, JWT_SECRET_KEY, (err: any, payload: any) => {
      if (!err) throw new AppError("Not a valid token.", 403);
      if (!payload.isAdmin) throw new AppError("Not authorized!", 403);
    });

    console.log("You are an Authorized admin");
  } catch (error) {
    next(error);
  }
};
