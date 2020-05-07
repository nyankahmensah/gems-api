const messageTemplates = require("./messageTemplates");
const XDate = require("xdate");
const { promisify } = require("util");
const fs = require("fs");

const writeFileAsync = promisify(fs.writeFile);

const START_PAGE_USERDATA = "POLYMRPH";
exports.broadcastForecast = async (req, res) => {
  console.log("Request body", req.body);
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
    dateEnd: new Date(currentDate.toString()).setHours(23, 59, 59)
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

exports.broadcastForecastToIVR = async (req, res) => {
  const day = req.query.day;
  const country = req.query.country;

  const date = new XDate().addDays(Number(day));

  const forecast = await req.broker.ForecastService.getForecastForIVR({
    dateStart: new Date(date.toString()).setHours(0, 0, 0),
    dateEnd: new Date(date.toString()).setHours(23, 59, 59),
    country
  });

  return res.status(200).send(forecast);
};

exports.receiveForecast = async (req, res) => {
  const { effectiveDate, oceanStateImage } = req.body;

  if (!effectiveDate) {
    return res.status(403).send({
      success: false,
      Forecast: "InvalidEffectiveDate"
    });
  }

  const imageBuffer = new Buffer.from(oceanStateImage, "base64");

  await writeFileAsync(
    `${process.env.FILE_DIRECTORY}/oceanstate/${effectiveDate}.png`,
    imageBuffer
  );
  try {
    const savedForecast = await req.broker.ForecastService.createForecast({
      ...req.body,
      oceanStateImage: `${effectiveDate}.png`
    });

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

exports.receivePFZ = async (req, res) => {
  const { effectiveDate, pfzImage } = req.body;

  if (!effectiveDate) {
    return res.status(403).send({
      success: false,
      Forecast: "InvalidEffectiveDate"
    });
  }

  const imageBuffer = new Buffer.from(pfzImage, "base64");

  await writeFileAsync(
    `${process.env.FILE_DIRECTORY}/pfz/${effectiveDate}.png`,
    imageBuffer
  );

  try {
    const savedPFZ = await req.broker.PFZService.createForecast({
      ...req.body,
      pfzImage: `${effectiveDate}.png`
    });

    return res.status(201).send({
      success: true,
      message: "PFZ saved successfully",
      payload: savedPFZ
    });
  } catch (e) {
    return res.status(500).send({
      message: "Wrong data format",
      data: req.body
    });
  }
};

exports.sendOceanStateImage = async (req, res) => {
  fs.createReadStream(
    `${process.env.FILE_DIRECTORY}/oceanstate/${req.params.image}`,
    {
      autoDestroy: true
    }
  )
    .on("error", () => res.status(400).send("Bad Request"))
    .on("end", () => {
      res.end();
    })
    .pipe(res);
};
