// ORM
const ORMBuilder = require("./db");

// Services
const MessageService = require("./services/Message");
const ForecastService = require("./services/Forecast");
const ApprovalService = require("./services/Approval");
const utils = require("./utils");

// This closure is asynchronous and it returns a promise. Remember to await it
// It has to be async because of the database connection
module.exports = async ({
  databaseURI = "mongodb://localhost:27017/gmes-ussd"
}) => {
  const ORM = await ORMBuilder({ databaseURI });

  return {
    ForecastService: ForecastService({ ORM, utils }),
    MessageService: MessageService({ ORM, utils }),
    ApprovalService: ApprovalService({ ORM, utils }),
    utils
  };
};
