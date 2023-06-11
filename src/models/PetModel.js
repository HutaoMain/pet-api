const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
  {
    petName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pets", PetSchema);
