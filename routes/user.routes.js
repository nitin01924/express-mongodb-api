import express from "express";
import User from "../models/User.js";

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

export default router;
