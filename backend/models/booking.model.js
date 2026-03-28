import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  flight: { type: mongoose.Schema.Types.ObjectId, ref: "Flight" },
  passengers: [
    {
      name: String,
      age: Number,
    },
  ],
  status: {
    type: String,
    enum: ["confirmed", "cancelled", "pending"],
    default: "confirmed",
  },
});

export default mongoose.model("Booking", bookingSchema);
