import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/users", userRoutes);

// middleware

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/users-test", (req, res) => {
  res.send("users test works");
});

const startServer = async () => {
  await connectDB();

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
