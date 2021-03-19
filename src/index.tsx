import React from 'react';
import ReactDOM from 'react-dom';
import { MainPage } from './components/MainPage/MainPage';
import { Reset } from 'styled-reset';

ReactDOM.render(
  <>
    <Reset />
    <MainPage />
  </>,
  document.getElementById('root'),
);
