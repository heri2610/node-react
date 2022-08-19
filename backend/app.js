import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import route from "./routes/index.js";
const app = express();
const port = 5000;
mongoose.connect("mongodb://localhost:27017/nodeApp");
const db = mongoose.Connection;

app.use(cors());
app.use(express.json());
app.use(route);

app.listen(port, () => {
  console.log(`app listening in port http://localhost:${port}`);
});
