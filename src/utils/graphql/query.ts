import { gql } from '@apollo/client';

export const GET_ARTICLES = gql`
  {
    nextJsBlogCollection {
      items {
        title
      }
    }
  }
`;
