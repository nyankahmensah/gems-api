const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Approval {
    country: String
    organization: String
    phoneNumber: String
    emailAddress: String
    requestReason: String
    approved: Boolean
    denialReason: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input requestApprovalInput {
    country: String!
    organization: String!
    phoneNumber: String!
    emailAddress: String!
    requestReason: String!
  }

  input getApprovalsFilter {
    country: String
    organization: String
    phoneNumber: String
    emailAddress: String
    requestReason: String
    approved: Boolean
    denialReason: String
  }

  extend type Mutation {
    requestApproval(input: requestApprovalInput): Approval
  }

  extend type Query {
    approvals(filter: getApprovalsFilter): [Approval]
  }
`;

module.exports = typeDefs;
