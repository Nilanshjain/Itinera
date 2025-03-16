import { Router } from "express";
import { register, login, logout, checkAuth } from "../controllers/authController";
import { protectRoute } from "../middleware/protectRoute";

const router = Router();

// Register a new user
router.post("/register", register);

// Login a user
router.post("/login", login);

// Logout a user
router.post("/logout", logout);

// Check authentication status
router.get("/check-auth", protectRoute, checkAuth);

export default router;
