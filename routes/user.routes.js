import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const found_id = await User.findById(id);
    if (found_id) {
      return res.status(200).json({
        message: "user founded",
        data: found_id,
      });
    }
    res.status(400).json({
      message: "not found",
    });
  } catch (error) {
    console.log("error occurs");
    res.status(400).json({
      message: "not found",
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
