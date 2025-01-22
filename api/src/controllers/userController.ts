import AppError from "../lib/AppError";
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

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) throw new AppError("Failed to get user", 404);

    console.log("User found successfully", user);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const updatedUser = await prisma.user.update({
      where: { id },
      data: req.body,
    });

    console.log("Updated User:", updateUser);
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const deletedUser = await prisma.user.delete({ where: { id } });

    console.log("User deleted succesfully", deleteUser);
    res.status(200).json(deletedUser);
  } catch (error) {
    next(error);
  }
};
