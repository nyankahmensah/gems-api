import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/shared';
import Colors from './theme/color';
import { HashRouter } from 'react-router-dom';
import Routes from './routes';
import graphqlClient from './graphql/client';

const theme = {
  colors: Colors,
  breakpoints: {
    mobile: '425px',
  },
};

function App() {
  return (
    <ApolloProvider client={graphqlClient}>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Routes />
          <div id="duemonkey-modal-portal" />
        </ThemeProvider>
      </HashRouter>
    </ApolloProvider>
  );
}

export default App;
