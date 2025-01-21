import express from "express";
import { shouldBeAdmin, shouldBeLoggedIn } from "../controllers/testController";
import verifyToken from "../middleware/verifyToken";
const router = express.Router();

router.get("/should-be-logged-in", verifyToken, shouldBeLoggedIn);

router.post("/should-be-admin", shouldBeAdmin);

export default router;
