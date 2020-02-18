import { gql } from 'apollo-boost';

const createMessage = gql`
  mutation($content: String!, $category: String) {
    createMessage(content: $content, category: $category) {
      _id
      content
      category
      createdAt
    }
  }
`;

export { createMessage };
