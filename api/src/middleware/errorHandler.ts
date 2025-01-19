import { Request, Response, NextFunction } from "express";
import AppError from "../utils/AppError";

const errorHandler = (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (error instanceof AppError) {
    console.error(`AppError: status:${error.status}, message:${error.message}`);
    res.status(error.status).json({ message: error.message });
  } else if (error instanceof Error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      message: error.message,
    });
  } else {
    console.error(
      "An unexpected error occurred. Please try again later.",
      error
    );
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export default errorHandler;
