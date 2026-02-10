import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use("/users", userRoutes);

// HOME-PAGE
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/users-test", (req, res) => {
  res.send("users test works");
});

const startServer = async () => {
  await connectDB();

  //LISTNING APP ON PORT
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
