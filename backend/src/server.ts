import express, { Application, Request, Response } from "express";
import pool from "./config/db";
import authRoutes from "./routes/authRoute.ts";
import errorHandler from "./middleware/errorHandler.ts";
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv";



dotenv.config();
const app: Application = express(); // 
app.use(express.json()); 
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));// ✅ Middleware to parse JSON requests 
app.use(errorHandler);
app.use("/api/auth", authRoutes);


app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));  


// ✅ Start the server
const PORT: number = parseInt(process.env.PORT || "5000", 10);
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
