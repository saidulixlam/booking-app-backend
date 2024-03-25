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

exports.getAppointment = async (req, res) => {
  try {
    const appointments = await Appointment.findAll();
    res.json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteAppointment = async (req, res) => {
  const id = req.params.id; // Extract the id from request parameters
  try {
    // Find the appointment by id and delete it
    const deletedAppointment = await Appointment.destroy({ where: { id } });
    if (deletedAppointment) {
      res.json({ message: "Appointment deleted successfully" });
    } else {
      res.status(404).json({ error: "Appointment not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
