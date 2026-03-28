import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["user", "admin"], default: "user" },
  gender: String,
  profilePicture: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
