import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './app';

const GlobalStyled = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyled>
        <App />
      </GlobalStyled>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
