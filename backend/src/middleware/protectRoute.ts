import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import pool from "../config/db";

const JWT_SECRET = process.env.JWT_SECRET as string;

interface DecodedToken {
  userId: number;
}

export const protectRoute = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    console.log("🟢 Incoming Headers:", req.headers);
    console.log("🟢 Cookies Object:", req.cookies);

    let token = req.cookies?.jwt; // Try getting token from cookies

    // If token is not in cookies, check the Authorization header
    if (!token && req.headers.authorization?.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
      console.log("🟢 Token Extracted from Authorization Header:", token);
    }

    if (!token) {
      console.log("🔴 No Token Found");
       res.status(401).json({ error: "Unauthorized - No token provided" });
       return;
    }

    console.log("🟢 Token Found:", token);
    

    // Decode & verify JWT
    const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;
    console.log("🟢 Decoded Token:", decoded);

    // Fetch user from PostgreSQL
    const userQuery = await pool.query("SELECT id, name, email FROM users WHERE id = $1", [decoded.userId]);

    if (userQuery.rows.length === 0) {
      console.log("🔴 User Not Found");
       res.status(401).json({ error: "Unauthorized - User not found" });
       return;
    }

    console.log("🟢 User Found:", userQuery.rows[0]);

    // Attach user info to request object
    req.user = userQuery.rows[0];

    next();
  } catch (error: any) {
    console.error("🔴 ProtectRoute error:", error.message);
    res.status(401).json({ error: "Unauthorized - Invalid token" });
    
  }
};
