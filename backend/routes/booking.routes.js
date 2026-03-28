import express from "express";
import {
  createBooking,
  cancelBooking,
} from "../controllers/booking.controller.js";

import { auth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", auth, createBooking);
router.put("/:id/cancel", auth, cancelBooking);

export default router;
