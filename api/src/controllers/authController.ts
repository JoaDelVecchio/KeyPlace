import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import prisma from "../lib/prisma";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config";
import AppError from "../lib/AppError";

//REGISTER
export const register = (req: Request, res: Response, next: NextFunction) => {
  const registerUser = async () => {
    try {
      const { username, email, password } = req.body;

      const isUserDuplicated = await prisma.user.findFirst({
        where: { OR: [{ username }, { email }] },
      });

      if (isUserDuplicated)
        throw new AppError("Username or email already exists", 401);

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.user.create({
        data: { username, email, password: hashedPassword },
      });

      console.log("User created successfully", newUser);
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      next(error);
    }
  };
};

//LOGIN
export const login = (req: Request, res: Response, next: NextFunction) => {
  const logUser = async () => {
    try {
      const { username, password }: { username: string; password: string } =
        req.body;

      const user = await prisma.user.findUnique({
        where: { username },
      });

      if (!user) throw new AppError("Invalid Credentials", 400);

      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) throw new AppError("Invalid Credentials", 400);

      const age = 7 * 24 * 60 * 60 * 1000;
      const token = jwt.sign({ id: user.id }, JWT_SECRET_KEY, {
        expiresIn: age,
      });

      res
        .cookie("token", token, {
          httpOnly: true,
          maxAge: age,
        })
        .status(200)
        .json(user);
    } catch (error) {
      next(error);
    }
  };
  logUser();
};

//LOGOUT
export const logout = (req: Request, res: Response, next: NextFunction) => {
  try {
    res
      .clearCookie("token", { httpOnly: true })
      .status(200)
      .json({ message: "Logout Successful" });
  } catch (error) {
    next(error);
  }
};
