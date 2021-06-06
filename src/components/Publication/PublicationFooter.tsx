import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';

const Footer = styled.footer`
   display: flex;
   align-items: center;
   font-size: ${fontSize[14]};
`;

const Date = styled.span`
   color: ${Colors.grey};
`;

const Avatar = styled.img`
   width: 16px;
   height: 16px;
   border-radius: 50%;
   margin: 0 10px;
`;

const Author = styled.span`
   color: ${Colors.darkblue};
`;

export interface PublicationFooterProps {
   author: string;
   authorImg: string;
}

const PublicationFooter: FC<PublicationFooterProps> = ({ author, authorImg }) => {
   return (
      <Footer>
         <Date>7 Jan 2020</Date>
         <Avatar src={authorImg} alt="" />
         <Author>{author}</Author>
      </Footer>
   );
};

export default PublicationFooter;
