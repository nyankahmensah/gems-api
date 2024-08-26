function ForecastService({ ORM }) {
  const createForecast = async ({
    ghana,
    benin,
    togo,
    capeverde,
    guineabissau,
    saotome,
    ivorycoast,
    guinea,
    mauritania,
    liberia,
    nigeria,
    sierraleone,
    senegal,
    gambia,
    westernsahara,
    morocco,
    algeria,
    tunisia,
    libya,
    egypt,
    effectiveDate,
    oceanStateImage
  }) => {

	console.log("Algeria", algeria);
	console.log("Tunisia", tunisia);
  console.log("Ghana", ghana);
	console.log("Libya", libya);
	console.log("Egypt", egypt);
	console.log("Western Sahara", westernsahara);
    try {
      return ORM.Forecast.save({
        ghana,
        benin,
        togo,
        capeverde,
        guineabissau,
        saotome,
        ivorycoast,
        guinea,
        mauritania,
        liberia,
        nigeria,
        sierraleone,
        senegal,
        gambia,
        westernsahara,
        morocco,
        algeria,
        tunisia,
        libya,
        egypt,
        effectiveDate,
        oceanStateImage
      });
    } catch (e) {
      throw e;
    }
  };
  const getForecast = async filter => ORM.Forecast.find(filter);

  const getForecastByCountryAndDay = async ({
    country,
    startDate,
    endDate
  }) => {
console.log("country_m", country)
console.log("startDate_m", startDate)
console.log("endDate_m", endDate)
    const forecast = await ORM.Forecast.findOne({
      effectiveDate: {
        $gte: new Date(startDate).setHours(0, 0, 0),
        $lt: new Date(endDate).setHours(23, 59, 59)
      }
    });
console.log("forecast_m", forecast)

    if (!forecast) {
      return {
        forecastMessage: null,
        oceanStateImage: null
      };
    }

    return {
      forecastMessage: forecast[country],
      oceanStateImage: forecast.oceanStateImage
    };
  };

  const getForecastForDay = async ({ dateStart, dateEnd, phone, network }) => {
console.log("dateStart_u", dateStart)
console.log("dateEnd_u", dateEnd)
console.log("phone", phone)
console.log("network", network)
    await ORM.USSDSession.save({
      phone,
      network
    });

    return ORM.Forecast.findOne({
      effectiveDate: {
        $gte: new Date(dateStart),
        $lt: dateEnd
      }
    });
  };

  const getForecastForIVR = async ({ dateStart, dateEnd, country }) => {
    const forecast = await ORM.Forecast.findOne({
      effectiveDate: {
        $gte: new Date(dateStart),
        $lt: dateEnd
      }
    });

    if(!forecast || !forecast[country]) {
      return '0';
    }

    const forecastValue = /:(.*)\(/
        .exec(forecast[country])[0]
        .split(' ');

    if(forecastValue.length === 3)
      return forecastValue[1];
    else
      return '0';
  };

  const broadcastForecast = async ({ category }) =>
    ORM.Forecast.findOne({ category });

  return {
    createForecast,
    getForecastForDay,
    broadcastForecast,
    getForecast,
    getForecastByCountryAndDay,
    getForecastForIVR
  };
}

module.exports = ForecastService;
