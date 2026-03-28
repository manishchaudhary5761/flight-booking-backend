import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { connectDB } from "./backend/config/db.js";

console.log(process.env.JWT_SECRET);

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
