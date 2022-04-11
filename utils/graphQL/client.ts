import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`,
});

const authLink = setContext(() => {
  return {
    headers: {
      authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  };
});

export const contentfulClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
