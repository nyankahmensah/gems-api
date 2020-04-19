const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type MobileUser {
    emailAddress: String
    organization: String
    phoneNumber: String
    mobileToken: String
  }

  extend type Mutation {
    loginMobileUser(password: String!): MobileUser
  }
`;

module.exports = typeDefs;
