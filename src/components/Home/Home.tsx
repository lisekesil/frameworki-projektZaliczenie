import React, { FC } from 'react';
import styled from 'styled-components';
import ResumeYourWork from '../common/ResumeYourWork/ResumeYourWork';
import Swiper from '../common/Swiper/Swiper';
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
         <Swiper />
         <ResumeYourWork />
      </Wrapper>
   );
};
