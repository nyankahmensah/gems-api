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

  input getForecastByCountryAndDayInput {
    country: country
    startDate: Date
    endDate: Date
  }

  extend type Query {
    getForecastByCountryAndDay(input: getForecastByCountryAndDayInput): String
  }
`;

module.exports = typeDefs;
