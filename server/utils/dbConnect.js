import mongoose from "mongoose";

import config from "config";

async function dbConnect() {
  try {
    await mongoose.connect(config.get("MONGO_URI"));
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
}

dbConnect();
