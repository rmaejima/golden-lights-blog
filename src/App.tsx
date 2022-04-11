import React from 'react';
import { ApolloProvider } from '@apollo/client';
import './App.css';
import { contentfulClient } from './graphql/client';
import { AchievementList } from './components/AchievementList';

function App() {
  return (
    <ApolloProvider client={contentfulClient}>
      <h1>hello</h1>
      <AchievementList />
    </ApolloProvider>
  );
}

export default App;
