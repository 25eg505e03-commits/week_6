import exp from "express";
import mongoose from "mongoose";
import { empRoute } from "./API/empApp.js";
import cors from "cors";
import dotenv from "dotenv";

// load environment variables
dotenv.config();

// create express app
const app = exp();

// allow cross-origin requests
app.use(cors());

// parse JSON data
app.use(exp.json());

// use employee routes
app.use("/emp-api", empRoute);

// basic health check route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 4000;

    // start server
    app.listen(PORT, () =>
      console.log(`server listening on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.log("err in DB connection", err.message);
  });

// handle errors
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});