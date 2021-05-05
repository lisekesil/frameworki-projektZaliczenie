import React, { FC } from 'react';
import styled from 'styled-components';
import ResumeYourWork from '../common/ResumeYourWork/ResumeYourWork';
import Workspaces from '../common/Workspaces/Workspaces';
import LatestPublications from '../LatestPublications/LatestPublications';

const Wrapper = styled.article`
   display: flex;
   flex-direction: column;

   width: 850px;
`;

export const Home: FC = () => {
   return (
      <Wrapper>
         <LatestPublications />
         <Workspaces />
         <ResumeYourWork />
      </Wrapper>
   );
};
