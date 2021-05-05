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

interface NavListItemProps {
   notifications: boolean;
}

const NavListItem = styled.li<NavListItemProps>`
   width: 32px;
   height: 32px;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 10px;
   padding: 3px;
   border-radius: 50%;
   position: relative;

   img {
      width: 20px;
   }

   ${(props) => {
      if (props.notifications)
         return `
        background-color: #ddd;

        &::after {
         content:"5";
         display: flex;
         justify-content: center;
         align-items: center;
         position:absolute;
         top:-3px;
         right:-3px;
         padding: 2px 5px;
         border-radius: 10px;
         color: #fff;
         background-color: #279fe4;
         font-size: 10px;
        }
        `;
   }}
`;

export const TopNav: FC = () => {
   return (
      <Wrapper>
         <LogoSelectWrapper>
            <Logo src="./icons/logo.png" alt="" />
         </LogoSelectWrapper>
         <Dropdown />
         <Search width="400px" placeholder="Search legalcluster" />
         <NavList>
            <NavListItem notifications={false}>
               <img src="./icons/house.png" alt="" />{' '}
            </NavListItem>
            <NavListItem notifications={true}>
               <img src="./icons/comments.png" alt="" />{' '}
            </NavListItem>
            <NavListItem notifications={true}>
               <img src="./icons/bell.png" alt="" />{' '}
            </NavListItem>
         </NavList>
      </Wrapper>
   );
};
