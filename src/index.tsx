import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/GlobalStyle';
import UserPage from './components/Lv5-pages/UserPage';
import theme from './components/Theme';
import store from './Store';

const appContainer = document.getElementById('app-container');

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserPage />
    </ThemeProvider>
  </Provider>,
  appContainer,
);
