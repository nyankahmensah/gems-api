const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Message {
    _id: ID!
    en: String
    fr: String
    pt: String
    category: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input messageFilter {
    _id: ID
    content: String
    category: String
  }

  extend type Mutation {
    createMessage(content: String!, category: String): Message!
  }

  extend type Query {
    messages(filter: messageFilter): [Message]!
  }
`;

module.exports = typeDefs;
