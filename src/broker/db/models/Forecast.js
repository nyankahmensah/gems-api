const mongoose = require('mongoose');

const forecastSchema = new mongoose.Schema(
  {
    ghana: { type: String },
    benin: { type: String },
    togo: { type: String },
    capeverde: { type: String },
    guineabissau: { type: String },
    saotome: { type: String },
    ivorycoast: { type: String },
    guinea: { type: String },
    mauritania: { type: String },
    liberia: { type: String },
    nigeria: { type: String },
    sierraleone: { type: String },
    senegal: { type: String },
    gambia: { type: String },
    effectiveDate: { type: Date, required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model('forecast', forecastSchema);

