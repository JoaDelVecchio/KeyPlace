import { NextFunction, Request, Response } from "express";
import colors from "colors";

const logger = (req: Request, res: Response, next: NextFunction) => {
  const methodColors: Record<string, keyof typeof colors> = {
    GET: "green",
    POST: "blue",
    PUT: "yellow",
    DELETE: "red",
  };

  const requestMade: string = `${req.method} ${req.protocol}://${req.get(
    "host"
  )}${req.originalUrl}`;

  const color = methodColors[req.method as string];
  const coloredMethod = color
    ? (colors[color] as (text: string) => string)(requestMade)
    : requestMade; // Apply color dynamically

  console.log(coloredMethod);

  next();
};

export default logger;
