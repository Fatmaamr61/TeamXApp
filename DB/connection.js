import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectionDB = async () =>
  await mongoose
    .connect(process.env.CONNECTION_URL)
    .then(() => console.log(`DataBase connected successfully... `))
    .catch((error) => console.log(`DataBase failed to connect ${error}`));