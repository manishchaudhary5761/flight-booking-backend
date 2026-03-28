import express from "express";
import {
  createFlight,
  getFlights,
  updateFlight,
  deleteFlight,
} from "../controllers/flight.controller.js";

import { auth } from "../middleware/auth.middleware.js";
import { isAdmin } from "../middleware/role.middleware.js";

const router = express.Router();

router.post("/", auth, isAdmin, createFlight);
router.get("/", getFlights);
router.put("/:id", auth, isAdmin, updateFlight);
router.delete("/:id", auth, isAdmin, deleteFlight);

export default router;
