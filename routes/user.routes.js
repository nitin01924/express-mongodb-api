import express from "express";
import User from "../models/User.js";
import asyncHandler from "../middleware/asyncHandler.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// LOGIN ROUTE FOR AUTHENTICATION
router.post(
  "/login",
  asyncHandler(async (req, res) => {
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

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      message: "login successful",
      token,
    });
  }),
);

// CREATE USER
router.post(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });

    res.status(200).json({
      message: `Created new user : ${name}`,
      data: user,
    });
  }),
);

// READ ALL USERS
router.get(
  "/",
  protect,
  asyncHandler(async (req, res, next) => {
    const user = await User.find();

    if (!user) {
      const error = new Error("No Data available");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      message: "Fetched all users.",
      data: user,
    });
  }),
);

// READ A SPECIFIC USER
router.get(
  "/:id",
  protect,
  asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
      const error = new Error("User not found!");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({
      message: "data fetched",
      data: user,
    });
  }),
);

// UPDATE EXISTING USER
router.put(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const updateuser = req.body;

    const updatedUser = await User.findByIdAndUpdate(id, updateuser, {
      new: true,
    });

    if (!req.body) {
      const error = new Error("request body is empty.");
      error.statusCode = 400;
      throw error;
    }

    res.status(200).json({
      message: "User updated Successfully",
      data: updatedUser,
    });
  }),
);

// DELETE USER
router.delete(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const deleteuser = await User.findByIdAndDelete(req.params.id);

    if (!deleteuser) {
      const error = new Error("User does not exist.");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({
      message: "User deleted successfully!",
      data: deleteuser,
    });
  }),
);

export default router;
