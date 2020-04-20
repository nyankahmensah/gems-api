const messageTemplates = require("./messageTemplates");
const XDate = require("xdate");

const START_PAGE_USERDATA = "920031";
exports.broadcastForecast = async (req, res) => {
  const parseString = req.broker.utils.parseAmpersandInString;
  const network = req.body.NETWORK;

  // Checking if it is root page
  if (
    String(req.body.USERDATA) === START_PAGE_USERDATA ||
    String(req.body.USERDATA) === "0" ||
    String(req.body.USERDATA) === "#"
  ) {
    // Computing days -- [3 days ahead, passing to array]
    const daysAhead = req.broker.utils.computeDaysAhead(3);

    let message = "\n1. Today, " + new XDate().toString("ddd dS MMM");
    daysAhead.map((day, index) => {
      message = message + "\n" + (index + 2) + ". " + day;
    });

    return res.status(200).json({
      ...req.body,
      MSG: parseString(messageTemplates.rootPage + message, network),
      MSGTYPE: true
    });
  }

  const currentDate = new XDate().addDays(Number(req.body.USERDATA - 1));

  const forecast = await req.broker.ForecastService.getForecastForDay({
    dateStart: new Date(currentDate.toString()).setHours(0, 0, 0),
    dateEnd: new Date(currentDate.toString()).setHours(23, 59, 59),
    phone: req.body.MSISDN
  });

  if (!forecast) {
    return res.status(200).json({
      ...req.body,
      MSG: parseString(
        messageTemplates.childScreenMessage +
          "\nNo forecast has been provided for this day" +
          messageTemplates.childScreenBackMessage,
        network
      ),
      MSGTYPE: true
    });
  }

  const message = parseString(
    messageTemplates.childScreenMessage +
      forecast.ghana +
      messageTemplates.childScreenBackMessage,
    network
  );

  return res.status(200).json({
    ...req.body,
    MSG: message,
    MSGTYPE: true
  });
};

exports.receiveForecast = async (req, res) => {
  const { effectiveDate } = req.body;

  if (!effectiveDate) {
    return res.status(403).send({
      success: false,
      Forecast: "InvalidEffectiveDate"
    });
  }

  try {
    const savedForecast = await req.broker.ForecastService.createForecast(
      req.body
    );

    return res.status(201).send({
      success: true,
      message: "Forecast saved successfully",
      payload: savedForecast
    });
  } catch (e) {
    return res.status(500).send({
      message: "Wrong data format",
      data: req.body
    });
  }
};
