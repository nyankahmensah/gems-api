const mongoose = require("mongoose");

const approvalSchema = new mongoose.Schema(
  {
    country: { type: String, required: true },
    organization: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
    requestReason: { type: String, required: true },
    approved: { type: Boolean, required: true, default: false },
    denialReason: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("approval", approvalSchema);
