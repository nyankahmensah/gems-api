const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type USSDSession {
    phone: String
    sessions: Int
    createdAt: DateTime
    updatedAt: DateTime
  }

  type USSDSessionResponse {
    data: [USSDSession]
    totalPages: Int
    page: Int
  }
  
  input getUSSDSessionFilter {
    phone: String
    session: Int
  }
  
  extend type Query {
    USSDSessions(filter: getUSSDSessionFilter page: Int): USSDSessionResponse
    USSDSessionsNumber: Int
  }
`;

module.exports = typeDefs;
