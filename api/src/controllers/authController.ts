import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import prisma from "../lib/prisma";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config";

//REGISTER
export const register = (req: Request, res: Response, next: NextFunction) => {
  const registerUser = async () => {
    try {
      const { username, email, password } = req.body;

      const isUserDuplicated = await prisma.user.findFirst({
        where: { OR: [{ username }, { email }] },
      });

      if (isUserDuplicated)
        return res
          .status(401)
          .json({ message: "Username or email already exists" });

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.user.create({
        data: { username, email, password: hashedPassword },
      });

      console.log("User created successfully", newUser);
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to register new user" });
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

      if (!user)
        return res.status(400).json({ message: "Invalid credentials" });

      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword)
        return res.status(400).json({ message: "Invalid credentials" });

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
      console.error("There was an error login in: ", error);
      res.status(500).json({ message: "Failed to login" });
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
    console.error(`There was an error with the logout ${error}`);
    res.status(500).json({ message: "Failed to logout" });
  }
};
