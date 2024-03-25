const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

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
