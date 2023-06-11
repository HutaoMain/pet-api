const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
    },
    vendorPrice: {
      type: Number,
      required: true,
    },
    vendor: {
      type: String,
      required: true,
    },
    retailPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "In Stock",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Products", ProductSchema);
