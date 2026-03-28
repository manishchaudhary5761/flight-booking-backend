import Booking from "../models/booking.model.js";
import Flight from "../models/flight.model.js";

export const createBooking = async (req, res) => {
  const { flightId, passengers } = req.body;

  const flight = await Flight.findById(flightId);

  if (flight.availableSeats < passengers.length) {
    return res.send("Not enough seats");
  }

  flight.availableSeats -= passengers.length;
  await flight.save();

  const booking = await Booking.create({
    user: req.user.id,
    flight: flightId,
    passengers,
  });

  res.send(booking);
};

export const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    booking.status = "cancelled";
    await booking.save();

    res.json({ message: "Booking cancelled" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
