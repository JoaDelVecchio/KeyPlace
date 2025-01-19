import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  updatePost,
} from "../controllers/postController";

const router = express.Router();

router.get("/", getPost);

router.post("/", createPost);

router.put("/", updatePost);

router.delete("/", deletePost);

export default router;
