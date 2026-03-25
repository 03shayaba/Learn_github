import mongoose from "mongoose";
import config from "../config/config.js";

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/learn_github");
    console.log("✅ DB Connected");
  } catch (error) {
    console.log("❌ DB Error:", error.message);
    process.exit(1);
  }
};

export default dbConnection;