import React from 'react';
import styled from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import { contentfulClient } from './graphql/client';
import { AchievementList } from './components/AchievementList';

const App: React.VFC = () => {
  return (
    <ApolloProvider client={contentfulClient}>
      <Text>hello</Text>
      <AchievementList />
    </ApolloProvider>
  );
};

export default App;

const Text = styled.h1`
  color: ${(p) => p.theme.colors.text.light};
`;
