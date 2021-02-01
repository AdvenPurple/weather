require('dotenv').config();
var express = require('express');
var bent = require('bent');
var router = express.Router();
const cors = require('cors')({ origin: true });


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Weather App' });
});

router.get('/city/:city', async (req, res) => {
  cors(req, res, async () => {
    const getJSON = bent('json');

    const city = req.params.city;

    try {
      // Getting info from the .env file for the sake of organizing data
      let apiKey = process.env.API_KEY;
      let baseUrl = process.env.BASE_URL;
      let unitSystem = process.env.UNIT_SYSTEM;

      let localWeather = await getJSON(`${baseUrl}/2.5/weather?q=${city}&units=${unitSystem}&appid=${apiKey}`);
     
      res.send(localWeather);
    }
    catch (err) {
      res.status(err.statusCode).send({name: err.name, message: err.message});
    }
  });
});

module.exports = router;
