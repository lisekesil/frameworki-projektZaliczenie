import React, { FC } from 'react';
import styled from 'styled-components';
import PublicationInfo from './PublicationInfo';

const Article = styled.article`
   width: 100%;
   height: 25%;
   display: flex;
   align-items: flex-start;
   margin-bottom: 10px;
`;

const ArticlePhoto = styled.img`
   height: 100%;
   /* width: height; */
`;

const ArticleDescription = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: space-between;
   padding: 5px;
   box-sizing: border-box;
`;

export interface PublicationProps {}

const Publication: React.FC<PublicationProps> = () => {
   return (
      <Article>
         <ArticlePhoto src="https://picsum.photos/64" alt="" />
         <ArticleDescription>
            <h3>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, provident iste
               voluptatem quos rerum numquam
            </h3>
            <PublicationInfo />
         </ArticleDescription>
      </Article>
   );
};

export default Publication;
