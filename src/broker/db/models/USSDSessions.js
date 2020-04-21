const mongoose = require("mongoose");

const ussdSessionSchema = mongoose.Schema(
  {
    phone: { type: String, required: true },
    network: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("ussdSession", ussdSessionSchema);
