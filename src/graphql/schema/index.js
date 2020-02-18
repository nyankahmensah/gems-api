const { gql } = require("apollo-server-express");
// eslint-disable-next-line no-unused-vars
const { GraphQLDateTime, GraphQLDate } = require("graphql-iso-date");
const messageSchema = require("./message");
const approvalSchema = require("./approval");

const rootSchema = gql`
  scalar DateTime
  scalar Date

  type Mutation {
    root: String
  }

  type Query {
    root: String
  }
`;
module.exports = [rootSchema, messageSchema, approvalSchema];
