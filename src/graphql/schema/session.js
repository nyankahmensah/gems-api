const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type USSDSession {
    phone: String
    session: Int
    createdAt: DateTime
    updatedAt: DateTime
  }

  input getUSSDSessionFilter {
    phone: String
    session: Int
  }

  extend type Query {
    USSDSessions(filter: getUSSDSessionFilter): [USSDSession]
  }
`;

module.exports = typeDefs;
