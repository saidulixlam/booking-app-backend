// backend/controllers/appointmentController.js

const Appointment = require("../models/appointment");

exports.createAppointment = async (req, res) => {
  try {
    const { name, phone, email } = req.body;
    const appointment = await Appointment.create({ name, phone, email });
    res.status(201).json(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
