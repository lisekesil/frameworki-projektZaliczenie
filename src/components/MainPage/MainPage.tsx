import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { Home } from '../Home/Home';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { TopNav } from '../TopNav/TopNav';
import Entities from '../Entities/Entities';
import Ecosystem from '../Ecosystem/Ecosystem';
import Publications from '../Publications/Publications';

import { getUsers } from '../../redux/actions/usersActions';
import { getComments } from '../../redux/actions/commentsActions';
import { getPosts } from '../../redux/actions/postsActions';
import { getPhotos } from '../../redux/actions/photosActions';
import Profile from '../Profile/Profile';

type GetUsers = ReturnType<typeof getUsers>;
type GetComments = ReturnType<typeof getComments>;
type GetPosts = ReturnType<typeof getPosts>;
type GetPhotos = ReturnType<typeof getPhotos>;

const Wrapper = styled.div`
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
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch<GetUsers>(getUsers());
      dispatch<GetComments>(getComments());
      dispatch<GetPosts>(getPosts());
      dispatch<GetPhotos>(getPhotos());
   }, []);

   return (
      <Router>
         <Wrapper>
            <TopNav />
            <InnerWrapper>
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
                     <Route path="/profile">
                        <Profile />
                     </Route>
                  </Switch>
               </Content>
            </InnerWrapper>
         </Wrapper>
      </Router>
   );
};
