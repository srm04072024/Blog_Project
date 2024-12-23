import express from "express";

const app = express();
const path = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(path, () => {
  console.log(`Server is running on http://localhost:${path}`);
});
