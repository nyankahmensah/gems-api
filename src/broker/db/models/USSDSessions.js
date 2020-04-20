const mongoose = require("mongoose");

const ussdSessionSchema = mongoose.Schema(
  {
    phone: { type: String, required: true },
    sessions: { type: Number, required: true, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("ussdSession", ussdSessionSchema);
