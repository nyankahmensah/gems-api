const router = require("express").Router();
const { forecastController } = require("../controllers");

// Forecast
router.post("/", forecastController.receiveForecast);
router.post("/ussd", forecastController.broadcastForecast);
router.get("/ivr-forecast", forecastController.broadcastForecastToIVR);
router.post("/message", forecastController.receiveForecast);
router.post("/pfz", forecastController.receivePFZ);
router.get("/oceanstate/:image", forecastController.sendOceanStateImage);

module.exports = router;
