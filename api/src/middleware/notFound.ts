import { NextFunction, Response, Request } from "express";
import AppError from "../lib/AppError";

const notFound = (req: Request, res: Response, next: NextFunction): void => {
  const appError = new AppError("Page not Found", 404);
  next(appError);
};

export default notFound;
