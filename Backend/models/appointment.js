

const { DataTypes } = require("sequelize");
const sequelize = require("../app");

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

module.exports = Appointment;
