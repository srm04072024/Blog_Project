import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRouter from "./routes/user.route.js";

const app = express();
const path = 3000;

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});
// console.log(process.env.MONGO_URL);
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.listen(path, () => {
  console.log(`Server is running on http://localhost:${path}`);
});
