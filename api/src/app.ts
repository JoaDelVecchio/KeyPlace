import express from "express";
import authRoute from "./routes/authRoute";
import postRouter from "./routes/postRoute";
import cookieParser from "cookie-parser";

import logger from "./middleware/logger";
import cors from "cors";
import { PORT } from "./config";

const app = express();

// Logger
app.use(logger);

// CORS
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true,
  })
);

// Parsers
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/posts", postRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
