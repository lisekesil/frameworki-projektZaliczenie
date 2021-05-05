import React, { FC } from 'react';
import styled from 'styled-components';
import PublicationFooter from './PublicationFooter';

interface MainArticleProps {
   isMain?: boolean;
}

const Article = styled.article<MainArticleProps>`
   width: 100%;
   height: 25%;
   display: flex;
   align-items: flex-start;
   margin-bottom: 10px;
   position: relative;

   ${(props) => {
      if (props.isMain)
         return `
         width: 300px;
         height: initial;
         margin-bottom: 0px;
         align-items: flex-end;

        `;
   }}
`;

const ArticlePhoto = styled.img<MainArticleProps>`
   height: 100%;

   ${(props) => {
      if (props.isMain)
         return `
         position: absolute;
        `;
   }}
`;

const ArticleDescription = styled.div<MainArticleProps>`
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: space-between;
   padding: 5px;
   box-sizing: border-box;

   ${(props) => {
      if (props.isMain)
         return `
         z-index: 1;
         color: white;
         width: 100%;
         height: 30%;
         margin: 0 0 20px 5px;

        `;
   }}
`;

export interface PublicationProps {
   photoURL: string;
   title: string;
   isMain?: boolean;
}

const Publication: React.FC<PublicationProps> = ({ photoURL, title, isMain }) => {
   return (
      <Article isMain={isMain}>
         <ArticlePhoto isMain={isMain} src={photoURL} alt="" />
         <ArticleDescription isMain={isMain}>
            <h3>{title}</h3>
            <PublicationFooter />
         </ArticleDescription>
      </Article>
   );
};

export default Publication;
