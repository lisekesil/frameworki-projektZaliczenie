import React, { FC } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from '../Home/Home';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { TopNav } from '../TopNav/TopNav';
import Entities from '../Entities/Entities';
import Ecosystem from '../Ecosystem/Ecosystem';
import Publications from '../Publications/Publications';

const Wrapper = styled.div`
   background: #eceff3;
   padding: 5px;
`;

const InnerWrapper = styled.div`
   margin: auto;
   width: 1200px;
`;

const Content = styled.div`
   max-width: 1200px;
   margin-top: 15px;
   display: flex;
   align-items: flex-start;
   justify-content: space-between;
`;

export const MainPage: FC = () => {
   return (
      <Router>
         <Wrapper>
            <InnerWrapper>
               <TopNav />
               <Content>
                  <LeftMenu />
                  <Switch>
                     <Route exact path="/">
                        <Home />
                     </Route>
                     <Route path="/publications">
                        <Publications />
                     </Route>
                     <Route path="/ecosystem">
                        <Ecosystem />
                     </Route>
                     <Route path="/entities">
                        <Entities />
                     </Route>
                  </Switch>
               </Content>
            </InnerWrapper>
         </Wrapper>
      </Router>
   );
};
