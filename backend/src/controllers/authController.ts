import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "../config/db";

const JWT_SECRET = process.env.JWT_SECRET as string;

// 🔹 Generate JWT Token Function
const generateToken = (userId: number): string => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7d" });
};

// 🟢 Register User
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ error: "All fields are required" });
      return;
    }

    const userExists = await pool.query("SELECT id FROM users WHERE email = $1", [email]);
    if (userExists.rows.length > 0) {
      res.status(400).json({ error: "User already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email",
      [name, email, hashedPassword]
    );

    const token = generateToken(newUser.rows[0].id);

    res.cookie("jwt", token, { httpOnly: true, sameSite: "lax", secure: false, maxAge: 7 * 24 * 60 * 60 * 1000 });

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

    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required" });
      return;
    }

    const user = await pool.query("SELECT id, name, email, password FROM users WHERE email = $1", [email]);
    if (user.rows.length === 0) {
      res.status(400).json({ error: "Invalid credentials" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!isMatch) {
      res.status(400).json({ error: "Invalid credentials" });
      return;
    }

    const token = generateToken(user.rows[0].id);

    res.cookie("jwt", token, { httpOnly: true, sameSite: "lax", secure: false, maxAge: 7 * 24 * 60 * 60 * 1000 });

    res.status(200).json({ message: "Login successful", user: { id: user.rows[0].id, name: user.rows[0].name, email }, token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// 🟢 Logout User
export const logout = (req: Request, res: Response): void => {
  res.clearCookie("jwt", { httpOnly: true, sameSite: "lax", secure: false });
  res.status(200).json({ message: "Logout successful" });
};

// 🟢 Check Authentication
export const checkAuth = async (req: Request, res: Response): Promise<void> => {
  try {

    res.status(200).json(req.user);
    
  } catch (error) {
    console.error("error in checkAuth controller", error);
    res.status(500).json({ message: "Internal Server Error"});

  };
}
