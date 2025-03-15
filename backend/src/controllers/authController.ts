import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "../config/db"; // Ensure this is correctly set up

const JWT_SECRET = process.env.JWT_SECRET as string;

// 🟢 Register User
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    // Validate inputs
    if (!name || !email || !password) {
      res.status(400).json({ error: "All fields are required" });
      return;
    }

    // Check if user already exists
    const userCheck = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (userCheck.rows.length > 0) {
      res.status(400).json({ error: "User already exists" });
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into DB
    const newUser = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email",
      [name, email, hashedPassword]
    );

    // Generate token
    const token = jwt.sign({ userId: newUser.rows[0].id }, JWT_SECRET, { expiresIn: "7d" });

    res.status(201).json({ message: "User registered successfully", user: newUser.rows[0], token });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// 🟢 Login User
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Validate inputs
    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required" });
      return;
    }

    // Check if user exists
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (user.rows.length === 0) {
      res.status(400).json({ error: "Invalid credentials" });
      return;
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!isMatch) {
      res.status(400).json({ error: "Invalid credentials" });
      return;
    }

    // Generate token
    const token = jwt.sign({ userId: user.rows[0].id }, JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json({ message: "Login successful", user: { id: user.rows[0].id, name: user.rows[0].name, email }, token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// 🟢 Logout User
export const logout = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// 🟢 Check Authentication
export const checkAuth = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user?.userId; // Extract userId from protectRoute middleware
    if (!userId) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    // Fetch user from DB
    const user = await pool.query("SELECT id, name, email FROM users WHERE id = $1", [userId]);
    if (user.rows.length === 0) {
      res.status(401).json({ error: "User not found" });
      return;
    }

    res.status(200).json({ message: "User authenticated", user: user.rows[0] });
  } catch (error) {
    console.error("CheckAuth error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
