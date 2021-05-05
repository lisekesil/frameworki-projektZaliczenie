import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/tools/store';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Colors } from './styledHelpers/Colors';

import { MainPage } from './components/MainPage/MainPage';

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

 body {
    background-color: ${Colors.background}
 }
`;

ReactDOM.render(
   <Provider store={store}>
      <GlobalStyle />
      <MainPage />
   </Provider>,
   document.getElementById('root'),
);
