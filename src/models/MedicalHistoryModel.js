const mongoose = require("mongoose");

const MedicalHistorySchema = new mongoose.Schema(
  {
    petId: {
      type: String,
      required: true,
    },
    veterinarian: {
      type: String,
      required: true,
    },
    medicalConditions: {
      type: String,
      required: true,
    },
    medications: {
      type: String,
      required: true,
    },
    allergies: {
      type: String,
      required: true,
    },
    medicalNotes: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("medical_history", MedicalHistorySchema);
