const mongoose = require("mongoose");

const countryAccountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cca2: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  apiKey: { type: String },
  termiiUsername: { type: String },
  termiiPassword: { type: String },
  accountBalance: { type: Number, required: true, default: 0 }
});

exports.CountryAccountModel = mongoose.model(
  "countryAccount",
  countryAccountSchema
);
