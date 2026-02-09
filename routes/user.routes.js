import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User found",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      message: "Invalid user id",
    });
  }
});

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

export default router;
