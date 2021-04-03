import React, { FC } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Search from '../common/Search/Search';

import { Colors } from '../../styledHelpers/Colors';

const InnerWrapper = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: ${Colors.white};
`;

const Logo = styled.img`
   width: 32px;
   margin: 0 15px;
`;

const LogoSelectWrapper = styled.div`
   display: flex;
`;

const SelectPage = styled.div`
   display: flex;
   align-items: center;
`;

const NavList = styled.ul`
   display: flex;
`;

const NavListItem = styled.li`
   margin: 10px;
`;

// const RightIcons = styled.div``;

export const TopNav: FC = () => {
   return (
      <InnerWrapper>
         <LogoSelectWrapper>
            <Logo src="./icons/logo.png" alt="" />
            <SelectPage>
               <img src="./icons/house2.png" alt="" />
               <Link to="/">Home</Link>
            </SelectPage>
         </LogoSelectWrapper>
         <Search />
         <NavList>
            <NavListItem>
               <a href="/">
                  <img src="./icons/house.png" alt="" />{' '}
               </a>
            </NavListItem>
            <NavListItem>
               <a href="/">
                  <img src="./icons/comments.png" alt="" />{' '}
               </a>
            </NavListItem>
            <NavListItem>
               <a href="/">
                  <img src="./icons/bell.png" alt="" />{' '}
               </a>
            </NavListItem>
         </NavList>
      </InnerWrapper>
   );
};
