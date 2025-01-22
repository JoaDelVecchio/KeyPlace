import prisma from "../lib/prisma";
import { NextFunction, Request, Response } from "express";

export const getUsers = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await prisma.user.findMany();
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getUser = (_req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    next(error);
  }
};

export const updateUser = (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    next(error);
  }
};

export const deleteUser = (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    next(error);
  }
};
