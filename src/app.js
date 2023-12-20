import express from "express";
import bodyParser from "body-parser";
import { adminRoutes } from "./admin/courseRoutes.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/api", adminRoutes);

// Defining a route
app.get("/", (req, res) => {
  res.send("Welcome to the task!");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
