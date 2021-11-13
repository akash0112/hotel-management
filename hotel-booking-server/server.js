import express from "express";
import { readdirSync } from "fs";
const morgan = require("morgan");
import cors from "cors";
import mongoose from "mongoose";
require("dotenv").config();
const app = express();
app.use(express.json())
app.use(cors());
mongoose.connect(
  process.env.DATABASE,
  {
    useNewUrlParser: true,
  }
).then(()=>{console.log("connected")}).catch((err)=>{console.log(err)});
app.use(morgan("dev"));
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));
// app.use('/api',router)
app.listen(process.env.PORT || 3003);
