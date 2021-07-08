import express from "express";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import process from "process";

import { PORT, MONGOURI } from "./config/config";

// App set up
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(compression());
app.use(helmet());
app.use(cors());

app.get("/", (req, res) => {
  console.log("it works");
  res.send("Hello");
});

mongoose
  .connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => {
      console.log("ERROR:" + err);
      process.exit(-1);
    });

app.listen(PORT, () => {
  console.log("hey  on port 5000");
});
