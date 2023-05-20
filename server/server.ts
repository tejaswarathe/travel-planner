import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "./src/config/mongoose";

dotenv.config();
const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Server running");
});

import locationRouter from "./src/routes/LocationsRoute";

app.use("/location", locationRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
