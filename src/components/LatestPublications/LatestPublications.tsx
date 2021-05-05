import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import Publication from '../common/Publication/Publication';

const LatestPublication = styled.article`
   width: 100%;
   background-color: ${Colors.white};
   margin-right: 30px;
   display: flex;
   justify-content: space-evenly;

   border-radius: 7px;
   box-shadow: 0px 2px 0px 0px rgba(77, 77, 77, 0.2);
   -webkit-box-shadow: 0px 2px 0px 0px rgba(77, 77, 77, 0.2);
   -moz-box-shadow: 0px 2px 0px 0px rgba(77, 77, 77, 0.2);
`;

const InnerWrapper = styled.div`
   width: 550px;
   padding: 20px;
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

const Header = styled.h2`
   color: ${Colors.darkblue};
   font-weight: 700;
   font-size: ${fontSize[20]};
   margin-bottom: 10px;
`;

const Footer = styled.h3`
   color: ${Colors.blue};
   font-weight: 700;
`;

export interface LatestPublicationsProps {}

const LatestPublications: React.FC = () => {
   const data = [
      {
         title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, provident iste',
         photoURL: 'https://picsum.photos/300',
      },
      {
         title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, provident iste',
         photoURL: 'https://picsum.photos/64',
      },
      {
         title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, provident iste',
         photoURL: 'https://picsum.photos/64',
      },
      {
         title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, provident iste',
         photoURL: 'https://picsum.photos/64',
      },
   ];

   return (
      <LatestPublication>
         {data && <Publication isMain={true} photoURL={data[0].photoURL} title={data[0].title} />}
         <InnerWrapper>
            <Header>Latest publications</Header>
            {data &&
               data.map((el, index) => {
                  if (index === 0) {
                     return;
                  } else {
                     return <Publication key={index} photoURL={el.photoURL} title={el.title} />;
                  }
               })}
            <Footer>See more publications</Footer>
         </InnerWrapper>
      </LatestPublication>
   );
};

export default LatestPublications;
