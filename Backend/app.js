const express = require("express");
const bodyParser = require("body-parser");
const cors= require('cors');
const sequelize = require('./utils/database');

const { Sequelize, DataTypes } = require("sequelize");
const Appointment = require("./models/appointment")
const controller = require("./controller/controller");

// Initialize Express app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Sync the model with the database
(async () => {
  await sequelize.sync();
  console.log("Appointment model synced with database.");
})();

// Define routes
app.post("/appointments", controller.createAppointment);
app.get('/appointments', controller.getAppointment);
app.delete('/appointments/:id', controller.deleteAppointment); // Define route to delete an appointment

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
