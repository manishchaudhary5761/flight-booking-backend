import mongoose from "mongoose";

const flightSchema = new mongoose.Schema({
  flightNumber: String,
  airline: String,
  departureCity: String,
  arrivalCity: String,
  departureDate: Date,
  arrivalDate: Date,
  price: Number,
  availableSeats: Number,
  flightClass: String,
  image: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Flight", flightSchema);
