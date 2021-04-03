import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import Publication from '../common/Publication/Publication';

const Publications = styled.div`
   width: 850px;
   background-color: ${Colors.white};
   margin-right: 30px;
   display: flex;
   justify-content: space-evenly;

   border-radius: 7px;
   box-shadow: 0px 2px 0px 0px rgba(77, 77, 77, 0.2);
   -webkit-box-shadow: 0px 2px 0px 0px rgba(77, 77, 77, 0.2);
   -moz-box-shadow: 0px 2px 0px 0px rgba(77, 77, 77, 0.2);
`;

const MainPublication = styled.div`
   background-color: #fff;
   background-image: url('https://picsum.photos/300');
   background-size: cover;
   width: 300px;
   height: 300px;
`;

const InnerWrapper = styled.div`
   width: 550px;
   padding: 20px;
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

export const Home: FC = () => {
   return (
      <Publications>
         <MainPublication />
         <InnerWrapper>
            <h2>Latest publications</h2>
            <Publication />
            <Publication />
            <Publication />
            <h2>See more publications</h2>
         </InnerWrapper>
      </Publications>
   );
};
