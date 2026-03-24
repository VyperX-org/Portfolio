import dotenv from "dotenv";  
import mongoose from "mongoose";
dotenv.config(); 

export const initUserConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB connected");
    return mongoose;
  } catch (err) {
    console.error("❌ DB error:", err);
    process.exit(1);
  }
};
