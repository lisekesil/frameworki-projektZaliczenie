import React, { FC } from 'react';
import styled from 'styled-components';

import { LeftMenu } from '../LeftMenu/LeftMenu';
import { TopNav } from '../TopNav/TopNav';

const Wrapper = styled.div`
  background: #eceff3;
  /* display: flex; */
  padding: 5px;
`;

const InnerWrapper = styled.div`
  margin: auto;
  width: 1200px;
`;

const Content = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
`;

export const MainPage: FC = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <TopNav />
        <Content>
          <LeftMenu />
          <div>content...</div>
        </Content>
      </InnerWrapper>
    </Wrapper>
  );
};
