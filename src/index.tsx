import React from 'react';
import ReactDOM from 'react-dom';
import 'ress';
import './global.css';
import { ThemeProvider } from 'styled-components';
import * as theme from 'utils/theme';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
