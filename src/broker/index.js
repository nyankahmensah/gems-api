// ORM
const ORMBuilder = require("./db");

// Services
const ForecastService = require("./services/Forecast");
const ApprovalService = require("./services/Approval");
const MobileUserService = require("./services/MobileUser");
const USSDSessionService = require("./services/USSDSession");
const UserService = require("./services/User");
const CountryService = require("./services/Country");
const utils = require("./utils");

// This closure is asynchronous and it returns a promise. Remember to await it
// It has to be async because of the database connection
module.exports = async ({
  databaseURI = "mongodb://localhost:27017/gmes-ussd"
}) => {
  const ORM = await ORMBuilder({ databaseURI });

  return {
    ForecastService: ForecastService({ ORM, utils }),
    ApprovalService: ApprovalService({ ORM, utils }),
    MobileUserService: MobileUserService({ ORM, utils }),
    USSDSessionService: USSDSessionService({ ORM, utils }),
    UserService: UserService({ ORM, utils }),
    CountryService: CountryService({ ORM, utils }),
    utils
  };
};
