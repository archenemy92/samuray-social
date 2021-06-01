import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Container, CssBaseline } from '@material-ui/core';
import {Provider} from "react-redux"
import {store} from "./react-redux/Store"

ReactDOM.render(
      <BrowserRouter>
          <CssBaseline />
          <Container >
              <Provider store={store}>
                  <App />
              </Provider>
          </Container>
      </BrowserRouter>,
  document.getElementById('root')
);

