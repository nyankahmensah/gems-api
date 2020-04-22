const router = require("express").Router();
const { forecastController } = require("../controllers");

// Forecast
router.post("/", forecastController.receiveForecast);
router.post("/ussd", forecastController.broadcastForecast);
router.post("/message", forecastController.receiveForecast);
router.get("/oceanstate/:image", forecastController.sendOceanStateImage);

module.exports = router;
