const router = require("express").Router();
const path = require("path");
const { forecastController } = require("../controllers");

// Web Dashboard
// Handle React routing, return all requests to React app
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Forecast
router.post("/", forecastController.receiveForecast);
router.post("/ussd", forecastController.broadcastForecast);
router.post("/message", forecastController.receiveForecast);

module.exports = router;
