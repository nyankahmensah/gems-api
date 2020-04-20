/*
This module loads all models, handles connection to the database
 and exposes everything as an ORM
 */
const mongoose = require("mongoose");
const buildORMFromModel = require("./buildORMFromModel");

// Models
const ForecastModel = require("./models/Forecast");
const ApprovalModel = require("./models/Approval");
const { MobileUserModel } = require("./models/MobileUser");
const USSDSessionModel = require("./models/USSDSessions");

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
    Forecast: buildORMFromModel(ForecastModel),
    Approval: buildORMFromModel(ApprovalModel),
    MobileUser: buildORMFromModel(MobileUserModel),
    USSDSession: buildORMFromModel(USSDSessionModel)
  };
};

module.exports = ORMBuilder;
