function ForecastService({ ORM }) {
  const createForecast = async ({
    ghana,
    benin,
    togo,
    capeVerde,
    guineaBissau,
    saoTomePrincipe,
    coteDivoire,
    guinea,
    mauritania,
    liberia,
    nigeria,
    sierraLeone,
    senegal,
    gambia,
    effectiveDate,
    oceanStateImage
  }) => {
    try {
      return ORM.Forecast.save({
        ghana,
        benin,
        togo,
        capeVerde,
        guineaBissau,
        saoTomePrincipe,
        coteDivoire,
        guinea,
        mauritania,
        liberia,
        nigeria,
        sierraLeone,
        senegal,
        gambia,
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
    const forecast = await ORM.Forecast.findOne({
      effectiveDate: {
        $gte: new Date(startDate).setHours(0, 0, 0),
        $lt: new Date(endDate).setHours(23, 59, 59)
      }
    });

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

    if(!forecast) {
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
