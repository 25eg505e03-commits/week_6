import exp from "express";
import mongoose from "mongoose";
import { empRoute } from "./API/empApp.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = exp();

// cors middleware
app.use(
  cors({
    origin: ["http://localhost:5173"],
  }),
);

// body parser middleware
app.use(exp.json());

// emp api middleware
app.use("/emp-api", empRoute);

// DB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`server listening on port ${PORT}`)
);
  })
  .catch((err) => {
    console.log("err in DB connection", err.message);
  });

// error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});