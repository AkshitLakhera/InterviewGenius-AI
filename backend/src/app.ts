import express from "express";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import uploadRouter from "./routes/uploadRouter";
import extractRouter from "./routes/extractRouter";
const app = express();
// Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
// Routes
app.use("v1/app/resumes", uploadRouter);
app.use("v1/app/resumes", extractRouter);
export default app;
