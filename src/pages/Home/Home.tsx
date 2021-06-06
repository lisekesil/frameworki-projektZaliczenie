import React, { FC } from 'react';
import styled from 'styled-components';
import ResumeYourWork from '../../components/ResumeYourWork/ResumeYourWork';
import Swiper from '../../components/Swiper/Swiper';
import LatestPublications from '../../components/LatestPublications/LatestPublications';

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
