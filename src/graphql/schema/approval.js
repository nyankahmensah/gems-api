const { gql } = require("apollo-server-express");

const typeDefs = gql`
  enum ApprovalStatus {
    approved
    denied
    pending
  }

  type Approval {
    _id: ID
    name: String
    country: String
    organization: String
    phoneNumber: String
    emailAddress: String
    requestReason: String
    approved: Boolean
    status: ApprovalStatus
    denialReason: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  input requestApprovalInput {
    name: String!
    country: String!
    organization: String!
    phoneNumber: String!
    emailAddress: String!
    requestReason: String!
  }

  input getApprovalsFilter {
    _id: ID
    name: String
    country: String
    organization: String
    phoneNumber: String
    emailAddress: String
    requestReason: String
    approved: Boolean
    denialReason: String
  }

  input rejectApprovalInput {
    approvalID: ID!
    reason: String
  }

  extend type Mutation {
    requestApproval(input: requestApprovalInput): Approval
    acceptApproval(approvalID: ID!): Approval
    rejectApproval(input: rejectApprovalInput!): Approval
  }

  extend type Query {
    approvals(filter: getApprovalsFilter): [Approval]
  }
`;

module.exports = typeDefs;
