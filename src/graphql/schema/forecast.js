const { gql } = require("apollo-server-express");

const typeDefs = gql`
  enum country {
    ghana
    benin
    togo
    capeverde
    guineabissau
    saotome
    ivorycoast
    guinea
    mauritania
    liberia
    nigeria
    sierraleone
    senegal
    gambia
  }

  input forecastByCountryAndDayInput {
    country: country
    startDate: Date
    endDate: Date
  }

  type Forecast {
    forecastMessage: String
  }

  extend type Query {
    forecastByCountryAndDay(input: forecastByCountryAndDayInput): Forecast
  }
`;

module.exports = typeDefs;
