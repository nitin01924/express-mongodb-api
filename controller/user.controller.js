import User from "../models/User.js";
import asyncHandler from "../middleware/asyncHandler.js";

// CREATE USER
export const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Name, email and password are required");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({ name, email, password });
  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  });
});

// GET ALL USERS
export const getAllUsers = asyncHandler(async (req, res) => {
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
});

// GET USER BY ID
export const getUserById = asyncHandler(async (req, res) => {
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
});

// UPDATE USER
export const updateUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const updateuser = req.body;

  const updatedUser = await User.findByIdAndUpdate(id, updateuser, {
    returnDocument: "after",
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
});

// DELETE USER
export const deleteUser = asyncHandler(async (req, res) => {
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
});
