import React from 'react';
import styled from 'styled-components';
import Icons from '../Icon/Icons.enum';
import Icon from '../Icon/Icon';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import { shadow } from '../../../styledHelpers/Shadow';

const Wrapper = styled.article`
   width: 100%;
   /* height: 100px; */
   padding: 10px;
   margin-bottom: 10px;
   background-color: ${Colors.white};
   box-shadow: ${shadow};
   border-radius: 5px;
`;

const Header = styled.h4`
   color: ${Colors.blue};
   font-weight: 700;
`;

const Content = styled.p`
   color: ${Colors.darkblue};
   margin: 10px 0 15px;
`;

const Footer = styled.footer`
   font-size: ${fontSize[14]};
   color: ${Colors.darkblue};
   margin: 0 5px;

   display: flex;
`;

const FooterInfo = styled.div`
   display: flex;
   margin-right: 20px;

   span {
      margin-left: 5px;
   }
`;

const FooterUpdate = styled.span`
   color: ${Colors.grey};
`;

export interface CommentProps {
   body: string;
   title: string;
}

const Comment: React.FC<CommentProps> = ({ body, title }) => {
   return (
      <Wrapper>
         <Header>{title}</Header>
         <Content>{body}</Content>
         <Footer>
            <FooterInfo>
               <Icon width="14px" height="14px" imgSrc={Icons.network} />
               <span>Subsid. corp.</span>
            </FooterInfo>
            <FooterInfo>
               <Icon width="14px" height="14px" imgSrc={Icons.network} />
               <span>Supplier contract</span>
            </FooterInfo>
            <FooterUpdate>Updated 3 days ago by John Doe</FooterUpdate>
         </Footer>
      </Wrapper>
   );
};

export default Comment;
