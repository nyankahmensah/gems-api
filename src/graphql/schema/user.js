const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type MobileUser {
    emailAddress: String
    organization: String
    phoneNumber: String
    mobileToken: String
  }

  type User {
    email: String
  }

  extend type Mutation {
    loginMobileUser(password: String!): MobileUser
    loginUser(email: String!, password: String): User
    changeUserPassword(
      email: String!
      currentPassword: String!
      newPassword: String!
    ): User
  }
`;

module.exports = typeDefs;
