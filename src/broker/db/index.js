/*
This module loads all models, handles connection to the database
 and exposes everything as an ORM
 */
const mongoose = require("mongoose");
const buildORMFromModel = require("./buildORMFromModel");

// Models
const MessageModel = require("./models/Message");
const ForecastModel = require("./models/Forecast");
const ApprovalModel = require("./models/Approval");

const ORMBuilder = async ({ databaseURI }) => {
  await mongoose
    .connect(databaseURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    .catch(e => {
      throw new Error(e);
    });

  return {
    Message: buildORMFromModel(MessageModel),
    Forecast: buildORMFromModel(ForecastModel),
    Approval: buildORMFromModel(ApprovalModel)
  };
};

module.exports = ORMBuilder;
