import express, { Application, Request, Response } from "express";
import pool from "./config/db";

const app: Application = express(); // 
app.use(express.json()); // ✅ Middleware to parse JSON requests

// ✅ Test API route
app.get("/test", (req: Request, res: Response): void => {
  res.json({ message: "Test API is working!" });
});

import authRoutes from "./routes/authRoute.ts";
app.use("/api/auth", authRoutes);


app.get("/test-db", async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT NOW();"); // Test query
    res.json({ message: "Database connected!", time: result.rows[0].now });
  } catch (error) {
    res.status(500).json({ error: "Database connection failed", details: error });
  }
});

// ✅ Start the server
const PORT: number = parseInt(process.env.PORT || "5000", 10);
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
