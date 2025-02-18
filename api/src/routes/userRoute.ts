import express from "express";
import verifyToken from "../middleware/verifyToken";

import {
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/userController";
const router = express.Router();

router.get("/", getUsers);

router.get("/:id", verifyToken, getUser);

router.put("/:id", verifyToken, updateUser);

router.delete("/:id", verifyToken, deleteUser);

export default router;
