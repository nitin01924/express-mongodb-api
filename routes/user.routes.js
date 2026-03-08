import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controller/user.controller.js";

import { protect, authorize } from "../middleware/authMiddleware.js";
import { allowSelfOrAdmin } from "../middleware/ownershipMIddleware.js";

const router = express.Router();

router.post("/", createUser);

router.get("/", protect, authorize("admin"), getAllUsers);

router.get("/:id", protect, allowSelfOrAdmin, getUserById);

router.put("/:id", protect, allowSelfOrAdmin, updateUser);

router.delete("/:id", protect, allowSelfOrAdmin, deleteUser);

export default router;
