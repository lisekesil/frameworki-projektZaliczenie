import React from 'react';
import ReactDOM from 'react-dom';
import { MainPage } from './components/MainPage/MainPage';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *{
     margin:0;
     padding:0;
     box-sizing:border-box;
     
     @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
     font-family: 'Lato' !important;
  }

  a {
text-decoration: none 
 }
`;

ReactDOM.render(
   <>
      <GlobalStyle />
      <MainPage />
   </>,
   document.getElementById('root'),
);
