import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import prisma from "../lib/prisma";
import AppError from "../utils/AppError";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config";

//REGISTER
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log(`User created successfully: ${newUser}`);
    res.status(201).json({ message: "User created Succesfully" });
  } catch (error) {
    next(error);
  }
};

//LOGIN
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password }: { username: string; password: string } =
    req.body;

  try {
    // CHECK IF USERNAME EXIST
    const user = await prisma.user.findUnique({ where: { username } });

    if (!user) throw new AppError("Invalid Credentials", 401);

    //CHECK IF PASSWORD CORRECT
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) throw new AppError("Invalid Password", 401);

    //GENERATE TOKEN AND SEND TO THE USER
    const age = 1000 * 60 * 60 * 24 * 7;
    const token = jwt.sign(
      {
        id: user.id,
      },
      JWT_SECRET_KEY,
      { expiresIn: age }
    );
    res
      .cookie("token", JWT_SECRET_KEY, {
        httpOnly: true,
        maxAge: age,
        //   secure: true,
      })
      .status(200)
      .json({ message: "Login Successful" });
  } catch (error) {
    next(error);
  }
};

//LOGOUT
export const logout = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.clearCookie("token").status(200).json({ message: "Logout Successful" });
  } catch (error) {
    next(error);
  }
};
