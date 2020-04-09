const mongoose = require("mongoose");

const approvalSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    country: { type: String, required: true },
    organization: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
    requestReason: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ["approved", "denied", "pending"],
      default: "pending"
    },
    denialReason: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("approval", approvalSchema);
