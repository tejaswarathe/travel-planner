import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/config/mongoose";
import { router } from "./src/routes/Router";
import { json } from "body-parser";

dotenv.config();
const app: Express = express();
const port = process.env.PORT;
connectDB;

app.set("view engine", "ejs");
app.use(json());

app.use("/", router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
