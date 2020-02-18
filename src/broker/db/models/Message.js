const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    en: { type: String },
    pt: { type: String },
    fr: { type: String },
    effectiveDate: { type: Date, required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model('message', messageSchema);
