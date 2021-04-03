import React, { FC } from 'react';
import styled from 'styled-components';

import Search from '../common/Search/Search';

import { Colors } from '../../styledHelpers/Colors';
import Dropdown from './Dropdown';

const Wrapper = styled.div`
   position: relative;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: ${Colors.white};

   border-radius: 7px;
   box-shadow: 0px 2px 0px 0px rgba(77, 77, 77, 0.2);
   -webkit-box-shadow: 0px 2px 0px 0px rgba(77, 77, 77, 0.2);
   -moz-box-shadow: 0px 2px 0px 0px rgba(77, 77, 77, 0.2);
`;

const Logo = styled.img`
   width: 32px;
   margin: 0 15px;
`;

const LogoSelectWrapper = styled.div`
   display: flex;
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
      <Wrapper>
         <LogoSelectWrapper>
            <Logo src="./icons/logo.png" alt="" />
         </LogoSelectWrapper>
         <Dropdown />
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
      </Wrapper>
   );
};
