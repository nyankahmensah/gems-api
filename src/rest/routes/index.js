const router = require("express").Router();
const { forecastController, pfzController } = require("../controllers");

// Forecast
router.post("/", forecastController.receiveForecast);
router.post("/ussd", forecastController.broadcastForecastGh);
router.post("/ussd-nigeria", forecastController.broadcastForecastNg);
router.get("/ivr-forecast", forecastController.broadcastForecastToIVR);
router.post("/message", forecastController.receiveForecast);
router.post("/pfz", forecastController.receivePFZ);
router.get("/pfz/:image", pfzController.sendPFZ);
router.get("/oceanstate/:image", forecastController.sendOceanStateImage);

module.exports = router;
