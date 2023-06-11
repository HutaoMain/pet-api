const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema(
  {
    employeeName: {
      type: String,
      required: true,
    },
    employeeId: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Staffs", StaffSchema);
