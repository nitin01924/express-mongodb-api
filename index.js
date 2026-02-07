import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";

app.use("/users", userRoutes);

dotenv.config();

const app = express();

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

const startServer = async () => {
  await connectDB();

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
