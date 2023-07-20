import express, { Express } from "express";
import mongoConnect from "./src/db/mongo/connect";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import ticketsRouter from "./src/routes/tickets";
import usersRouter from "./src/routes/users";
import cors from "cors";
import { corsConfig } from "./src/config/cors";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ ...corsConfig, credentials: true }));

app.use("/api/v1/ticket", ticketsRouter);
app.use("/api/v1/user", usersRouter);

const port = process.env.PORT;

// mongoConnect();

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
