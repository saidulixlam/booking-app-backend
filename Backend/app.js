// backend/app.js

const express = require("express");
const bodyParser = require("body-parser");
const cors= require('cors');


const { Sequelize, DataTypes } = require("sequelize");

// Initialize Express app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Database connection

const sequelize = new Sequelize("node-schema", "root", "Sanjay@123", {
  dialect: "mysql",
  host: "localhost",
});


// Test the database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

// Define Appointment model
const Appointment = sequelize.define("Appointment", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync the model with the database
(async () => {
  await sequelize.sync();
  console.log("Appointment model synced with database.");
})();

// Define routes
app.post("/appointments", async (req, res) => {
  try {
    const { name, phone, email } = req.body;
    const appointment = await Appointment.create({ name, phone, email });
    res.status(201).json(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Define route to fetch all appointments
app.get('/appointments', async (req, res) => {
    try {
        const appointments = await Appointment.findAll();
        res.json(appointments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
