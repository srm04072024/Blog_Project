import express from "express";
import mongoose from "mongoose";

const app = express();
const path = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

mongoose
  .connect(
    "mongodb+srv://srm2032018:blog2024@blog-2024.8n59t.mongodb.net/?retryWrites=true&w=majority&appName=Blog-2024"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(path, () => {
  console.log(`Server is running on http://localhost:${path}`);
});
