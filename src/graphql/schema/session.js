const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type USSDSession {
    phone: String
    sessions: Int
    createdAt: DateTime
    updatedAt: DateTime
  }

  input getUSSDSessionFilter {
    phone: String
    session: Int
  }

  extend type Query {
    USSDSessions(filter: getUSSDSessionFilter): [USSDSession]
    USSDSessionsNumber: Int
  }
`;

module.exports = typeDefs;
