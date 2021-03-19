import React, { FC } from 'react';
import styled from 'styled-components';

import { LeftMenu } from '../LeftMenu/LeftMenu';
import { TopNav } from '../TopNav/TopNav';

const Wrapper = styled.div``;

const Content = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
`;

export const MainPage: FC = () => {
  return (
    <Wrapper>
      <TopNav />
      <Content>
        <LeftMenu />
        <div>content...</div>
      </Content>
    </Wrapper>
  );
};
