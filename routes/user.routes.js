import express from "express";
import User from "../models/User.js";
import asyncHandler from "../middleware/asyncHandler.js";

const router = express.Router();

// CREATE USER
router.post("/", async (req, res) => {
  try {
    const { name, age } = req.body;

    // basic validation
    if (!name || !age) {
      return res.status(400).json({
        error: "Name and age are required",
      });
    }
    const user = await User.create({ name, age });

    res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// READ ALL USERS
router.get("/", async (req, res) => {
  try {
    const userlist = await User.find();
    res.status(200).json(userlist);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// READ USER
router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      const error = new Error("User not found!!");
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
router.put("/:id", async (req, res) => {
  try {
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
  } catch (error) {
    res.status(400).json({
      message: "invalid user id",
    });
  }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        message: "user does not found",
      });
    }
    res.status(200).json({
      message: "user deleted successfully.",
      data: deletedUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "invalid user id.",
    });
  }
});

export default router;
