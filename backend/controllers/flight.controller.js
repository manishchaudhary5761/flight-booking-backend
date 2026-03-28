import Flight from "../models/flight.model.js";

export const createFlight = async (req, res) => {
  const flight = await Flight.create({
    ...req.body,
    image: req.file?.path,
    createdBy: req.user.id,
  });
  res.send(flight);
};

export const getFlights = async (req, res) => {
  try {
    const { departureCity, arrivalCity } = req.query;

    // ✅ dynamic filter
    let filter = {};

    if (departureCity) filter.departureCity = departureCity;
    if (arrivalCity) filter.arrivalCity = arrivalCity;

    const flights = await Flight.find(filter);

    res.json(flights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateFlight = async (req, res) => {
  const flight = await Flight.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(flight);
};

export const deleteFlight = async (req, res) => {
  await Flight.findByIdAndDelete(req.params.id);
  res.send("Deleted");
};
