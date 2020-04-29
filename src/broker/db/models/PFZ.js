const mongoose = require("mongoose");

const PFZSchema = new mongoose.Schema(
  {
    effectiveDate: { type: Date, required: true },
    pfzImage: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("pfz", PFZSchema);
