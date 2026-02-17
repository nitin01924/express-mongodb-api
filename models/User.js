import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name must be required."],
      trim: true,
      minlength: [3, "Name must be at least 3 character long."],
    },
    age: {
      type: Number,
      required: [true,"Age are required."],
      min: [1, "Age must be greate than 0"],
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);

export default User;
