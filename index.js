import express from "express";
import dotenv from "dotenv";
import { appRouter } from "./src/appRouter.js";
import { connectionDB } from "./db/connection.js";

connectionDB();
dotenv.config();

const app = express();
const port = process.env.PORT;

// routing
appRouter(app, express);
app.listen(port, () => {
  console.log(
    `......................SERVER RUNNING ON PORT ${port}......................`
  );
});