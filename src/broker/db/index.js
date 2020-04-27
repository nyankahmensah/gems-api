/*
This module loads all models, handles connection to the database
 and exposes everything as an ORM
 */
const mongoose = require("mongoose");
const buildORMFromModel = require("./buildORMFromModel");
const mkdirp = require("mkdirp");

// Models
const ForecastModel = require("./models/Forecast");
const ApprovalModel = require("./models/Approval");
const { MobileUserModel } = require("./models/MobileUser");
const USSDSessionModel = require("./models/USSDSessions");
const UserModel = require("./models/User");
const { CountryAccountModel } = require("./models/Country");

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

  // Setting up new user if there is none
  const existingUsers = await UserModel.find({});

  if (!existingUsers.length) {
    await new UserModel({
      email: "gmes@ug.edu.gh",
      password: "password"
    }).save();
    console.log(
      "New user created - \nemail -- gmes@ug.edu.gh  \npassword -- password"
    );
  }

  mkdirp(`${process.env.FILE_DIRECTORY}/oceanstate`, err => {
    if (err) {
      throw err;
    }

    console.log(
      "File tree created at ",
      `${process.env.FILE_DIRECTORY}/oceanstate`
    );
  });

  return {
    Forecast: buildORMFromModel(ForecastModel),
    Approval: buildORMFromModel(ApprovalModel),
    MobileUser: buildORMFromModel(MobileUserModel),
    USSDSession: buildORMFromModel(USSDSessionModel),
    Country: buildORMFromModel(CountryAccountModel),
    User: buildORMFromModel(UserModel)
  };
};

module.exports = ORMBuilder;
