const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');


const ussdSessionSchema = mongoose.Schema(
  {
    phone: { type: String, required: true },
    network: { type: String, required: true }
  },
  { timestamps: true }
);

ussdSessionSchema.plugin(mongoosePaginate)

module.exports = mongoose.model("ussdSession", ussdSessionSchema);
