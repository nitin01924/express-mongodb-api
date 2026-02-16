import express from "express";
import User from "../models/User.js";
import asyncHandler from "../middleware/asyncHandler.js";

const router = express.Router();

// CREATE USER
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { name, age } = req.body;
    const user = await User.create({ name, age });

    res.status(200).json({
      message: `Created new user : ${name}`,
      data: user,
    });
  }),
);

// READ ALL USERS
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const user = await User.find();
    res.status(200).json({
      message: "Fetched all users.",
      data: user,
    });
  }),
);

// READ A SPECIFIC USER
router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      message: "data fetched",
      data: user,
    });
  }),
);

// UPDATE EXISTING USER
router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const updateuser = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, updateuser, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found.",
      });
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
  asyncHandler(async (req, res) => {
    const deleteuser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "User deleted successfully!",
      data: deleteuser,
    });
  }),
);

export default router;
