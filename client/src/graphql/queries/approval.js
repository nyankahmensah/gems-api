import { gql } from 'apollo-boost';

const approvals = gql`
  query {
    approvals {
      country
      organization
      emailAddress
      createdAt
      updatedAt
      requestReason
    }
  }
`;

const requestApproval = gql`
  mutation(
    $country: String!
    $organization: String!
    $phoneNumber: String!
    $emailAddress: String!
    $requestReason: String!
  ) {
    requestApproval(
      input: {
        country: $country
        organization: $organization
        phoneNumber: $phoneNumber
        emailAddress: $emailAddress
        requestReason: $requestReason
      }
    ) {
      country
      emailAddress
      organization
      phoneNumber
      requestReason
    }
  }
`;

export { approvals, requestApproval };
