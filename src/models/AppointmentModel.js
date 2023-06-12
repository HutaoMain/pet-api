const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema(
  {
    petName: {
      type: String,
      required: true,
    },
    ownerName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    appointmentDate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Appointments", AppointmentSchema);
