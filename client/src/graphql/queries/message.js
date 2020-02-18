import { gql } from 'apollo-boost';

const messages = gql`
  query {
    messages {
      _id
      content
      category
      createdAt
    }
  }
`;

export { messages };
