import express from "express";
import authRoute from "./routes/authRoute";
import postRouter from "./routes/postRoute";
import testRouter from "./routes/testRoute";
import cookieParser from "cookie-parser";
import logger from "./middleware/logger";
import cors from "cors";
import { CLIENT_ORIGIN_URL, PORT } from "./config";
import errorHandler from "./middleware/errorHandler";
import notFound from "./middleware/notFound";

const app = express();

// Logger
app.use(logger);

// CORS
app.use(
  cors({
    origin: CLIENT_ORIGIN_URL, // Frontend URL
    credentials: true,
  })
);

// Parsers
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/posts", postRouter);
app.use("/api/test", testRouter);

//Error Handler
app.use(notFound);
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
