const mongoose = require("mongoose");

const mobileUserSchema = new mongoose.Schema({
  emailAddress: { type: String, required: true },
  organization: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  active: { type: Boolean, required: true, default: true },
  mobileToken: { type: String }
});

exports.MobileUserModel = mongoose.model("mobileUser", mobileUserSchema);
