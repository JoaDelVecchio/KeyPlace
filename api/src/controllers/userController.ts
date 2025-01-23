import { UserAuthInfoRequest } from "@/types/express";
import AppError from "../lib/AppError";
import prisma from "../lib/prisma";
import bcrypt from "bcrypt";
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
  req: UserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  const { password, avatar, ...inputs } = req.body;

  if (id !== tokenUserId)
    throw new AppError("Failed to update token, Not Authorized", 403);

  let hashedPassword = null;

  if (password) {
    hashedPassword = await bcrypt.hash(password, 10);
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...inputs,
        ...(hashedPassword && { password: hashedPassword }),
        ...(avatar && { avatar }),
      },
    });

    console.log("Updated User:", updatedUser);
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: UserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  if (id !== tokenUserId)
    throw new AppError("Failed to update token, Not Authorized", 403);
  try {
    const deletedUser = await prisma.user.delete({ where: { id } });

    console.log("User deleted succesfully", deleteUser);
    res.status(200).json(deletedUser);
  } catch (error) {
    next(error);
  }
};
