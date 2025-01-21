import { NextFunction, Response, Request } from "express";
import AppError from "../lib/AppError";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof AppError) {
    // Handle expected errors
    console.error(err);
    res.status(err.status).json({ message: err.message });
    return;
  }

  console.error("Unexpected Error:", err);
  res.status(500).json({ message: "Internal Server Error" });
};

export default errorHandler;
