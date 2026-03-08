import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import asyncHandler from "../middleware/asyncHandler.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/generatesToken.js";

// LOGIN
export const loginUser = asyncHandler(async (req, res) => {
  // LOGIN  FOR AUTHENTICATION
  const { email, password } = req.body;

  if (!email || !password) {
    const error = new Error(
      "Email and password are required for login your account",
    );
    error.statusCode = 400;
    throw error;
  }

  const user = await User.findOne({ email });
  if (!user) {
    const error = new Error("Email is incorrect");
    error.statusCode = 401;
    throw error;
  }

  const ismatch = await bcrypt.compare(password, user.password);
  if (!ismatch) {
    const error = new Error("Password is incorrect");
    error.statusCode = 401;
    throw error;
  }

  //Accessing tokens from utils/generatestaken
  const accessToken = generateAccessToken(user._id);
  const refreshToken = generateRefreshToken();

  // Hash refresh token before saving
  const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);

  // Save hashed refresh token in DB
  user.refreshToken = hashedRefreshToken;
  await user.save();

  // Send refresh token as httpOnly cookie
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false, // true in production
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  res.status(200).json({
    id: user._id,
    accessToken,
  });
});

//
// REFRESH TOKEN
export const refreshAccessToken = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: "No refresh token" });
  }

  const user = await User.findOne({ refreshToken: { $exists: true } });
  if (!user) {
    return res.status(403).json({ message: "Invalid refresh token" });
  }
  const isMatch = await bcrypt.compare(refreshToken, user.refreshToken);

  if (!isMatch) {
    return res.status(403).json({ message: "Invalid refresh token" });
  }
  const newAccessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });
  res.status(200).json({
    accessToken: newAccessToken,
  });
});

// LOGOUT
export const logoutUser = asyncHandler(async (req, res) => {
  req.user.refreshToken = undefined;
  await req.user.save();

  res.clearCookie("refreshToken");

  res.status(200).json({ message: "Logged out successfully" });
});
