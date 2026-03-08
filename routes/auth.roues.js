import express from "express";
import { loginUser, refreshAccessToken, logoutUser } from "../controller/auth.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/refresh", refreshAccessToken);
router.post("/logout", protect, logoutUser);

export default router;