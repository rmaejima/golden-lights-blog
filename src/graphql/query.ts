import { gql } from '@apollo/client';

export const GET_ARTICLES = gql`
  query GetArticles {
    nextJsBlogCollection {
      items {
        title
        description
        content {
          json
        }
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
      }
    }
  }
`;
