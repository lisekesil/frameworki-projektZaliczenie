import React, { FC } from 'react';
import styled from 'styled-components';
import Search from '../common/Search/Search';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

const InnerWrapper = styled.div`
  width: 1200px;
  background-color: ${Colors.white};
`;

const NavList = styled.ul`
  display: flex;
`;

const NavListItem = styled.li`
  margin: 10px;
`;

const RightIcons = styled.div``;

export const TopNav: FC = () => {
  return (
    <Wrapper>
      <div>
        <img src="./icons/house2.png" alt="" />
        <nav>Home</nav>
      </div>
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
