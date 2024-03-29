import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/database.js";
import * as dotenv from "dotenv";

import mainRoutes from "./routes/main.js";

dotenv.config({ path: "./config/.env" });

const app = express();

// MongoDB configuration
connectDB();

app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cors());
app.use(express.json());

app.use("/", mainRoutes);

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on Port ${process.env.PORT}\nYou better catch it!`
  );
});
