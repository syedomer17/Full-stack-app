import express from "express";
import config from "config";
import cors from "cors";

import "./utils/dbConnect.js";

import userRouter from "./controllers/user/index.js";
import propertyRouter from "./controllers/property/index.js";
import authMiddelware from "./middleware/auth.js";
import publicRouter from "./controllers/public/index.js";

const app = express();
const PORT = config.get("PORT");

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "https://yourdomain.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // if your frontend requires cookies or authentication headers
  })
);

app.get("/", (req, res) => {
  try {
    res.json({ msg: "Hello World" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

app.use("/api/public", publicRouter);
app.use(authMiddelware);
app.use("/api/user", userRouter);
app.use("/api/property", propertyRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
