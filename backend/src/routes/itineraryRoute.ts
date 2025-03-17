import express from "express";
import { generateItinerary } from "../controllers/itineraryController";
import { protectRoute } from "../middleware/protectRoute"

const router = express.Router();

// Generate itinerary using AI
router.post("/generate", protectRoute, generateItinerary);

export default router; 