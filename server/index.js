import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/posts", postRoutes);
app.use("/user", userRoutes);

const CONNECTION_URL =
  "mongodb+srv://test:test@cluster0.jlybk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 1337;

mongoose
  .connect(CONNECTION_URL, {})
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
