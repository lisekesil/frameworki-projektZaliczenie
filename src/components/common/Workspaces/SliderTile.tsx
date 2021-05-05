import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import { shadow } from '../../../styledHelpers/Shadow';
import Icon from '../Icon/Icon';
import Icons from '../Icon/Icons.enum';

interface TileProps {
   bgImgSrc: string;
}

const Tile = styled.article<TileProps>`
   width: 230px;
   height: 170px;
   background-image: url(${(p) => p.bgImgSrc});
   /* background-color: ${Colors.white}; */
   box-shadow: ${shadow};
   border-radius: 5px;

   position: relative;
`;

const BackgroundImg = styled.img`
   height: 70px;
   width: 100%;
`;

const ContentContainer = styled.div`
   position: absolute;
   bottom: 0;
   width: 100%;
   height: 100px;
   background-color: ${Colors.white};
`;

const Main = styled.div`
   width: 100%;
   position: absolute;
   top: -15px;
   left: 10px;
   /* transform: translateY(-50%); */
   display: flex;
   align-items: center;
   justify-content: flex-start;
`;

const MainIconContainer = styled.div`
   margin-right: 10px;
   background-color: ${Colors.white};
   width: 64px;
   height: 64px;
   box-shadow: ${shadow};
   border-radius: 5px;
   border: 1px solid ${Colors.lightgrey};

   display: flex;
   align-items: center;
   justify-content: center;
`;

const MainTitle = styled.h3`
   font-weight: 700;
   margin-right: 10px;
   color: ${Colors.darkgrey};
`;

const Footer = styled.footer`
   position: absolute;
   bottom: 8px;
   left: 12px;
   font-size: ${fontSize[14]};
   color: ${Colors.darkgrey};
`;

const FooterInfo = styled.div`
   display: flex;
`;

const FooterIconInfo = styled.span`
   padding: 0 20px 10px 5px;
`;

export interface SliderTileProps {
   title: string;
   imgSrc: Icons;
}

const SliderTile: React.FC<SliderTileProps & TileProps> = ({ title, imgSrc, bgImgSrc }) => {
   return (
      <Tile bgImgSrc={bgImgSrc}>
         {/* <BackgroundImg src="https://picsum.photos/300" alt="" /> */}
         <ContentContainer>
            <Main>
               <MainIconContainer>
                  <Icon width="32px" height="32px" imgSrc={imgSrc}></Icon>
               </MainIconContainer>
               <MainTitle>{title}</MainTitle>
            </Main>
            <Footer>
               <FooterInfo>
                  <Icon width="14px" height="14px" imgSrc={Icons.cog}></Icon>
                  <FooterIconInfo>Contract</FooterIconInfo>
                  <Icon width="14px" height="14px" imgSrc={Icons.cog}></Icon>
                  <FooterIconInfo>150 users</FooterIconInfo>
               </FooterInfo>
               <footer>Last update 2 days ago</footer>
            </Footer>
         </ContentContainer>
      </Tile>
   );
};

export default SliderTile;