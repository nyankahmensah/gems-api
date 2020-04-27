const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type CountryAccount {
    _id: ID
    name: String
    cca2: String
    email: String
    apiKey: String
    termiiUsername: String
    termiiPassword: String
    accountBalance: Float
  }

  input createCountryAccountInput {
    name: String!
    cca2: String!
    email: String!
    password: String!
    apiKey: String
    termiiUsername: String
    termiiPassword: String
  }

  input loginCountryAccountInput {
    email: String!
    password: String!
  }

  type LoginCountryAccountOutput {
    token: String
    countryAccount: CountryAccount
  }

  extend type Mutation {
    createCountryAccount(input: createCountryAccountInput): CountryAccount
    loginCountryAccount(input: loginCountryAccountInput): LoginCountryAccountOutput
  }

  extend type Query {
    countryAccounts: [CountryAccount]
  }
`;

module.exports = typeDefs;
