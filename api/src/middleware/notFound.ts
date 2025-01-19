import { NextFunction, Request, Response } from "express";
import AppError from "../utils/AppError";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const notFoundError = new AppError("Page not found", 404);
  next(notFoundError);
};

export default notFound;
