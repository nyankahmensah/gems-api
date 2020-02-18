const router = require('express').Router();
const { messageController, forecastController } = require('../controllers');

router.post('/', forecastController.receiveForecast);
router.get('/', (req, res) => {
  return res.status(200).send("Welcome to GMES. This is a GET request")
});
router.post('/ussd', forecastController.broadcastForecast);
router.post('/message', forecastController.receiveForecast);

module.exports = router;