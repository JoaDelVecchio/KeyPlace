import dotenv from "dotenv";
dotenv.config();

// Validate required variables (optional but recommended)
if (
  !process.env.JWT_SECRET_KEY ||
  !process.env.DATABASE_URL ||
  !process.env.PORT ||
  !process.env.CLIENT_ORIGIN_URL
) {
  console.error("Missing required environment variable");
  process.exit(1);
}

export const PORT = process.env.PORT;
export const DATABASE_URL = process.env.DATABASE_URL;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export const CLIENT_ORIGIN_URL = process.env.CLIENT_ORIGIN_URL;
