import * as React from 'react';
import styled from 'styled-components';
import SliderTile from './SliderTile';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Icons from '../Icon/Icons.enum';

const Container = styled.section`
   width: 100%;
   margin-bottom: 20px;
`;

const SectionHeader = styled.h2`
   margin: 20px 10px 10px;
   font-weight: 700;
`;

export interface WorkspacesProps {}

const Workspaces: React.FC<WorkspacesProps> = () => {
   const dataWorkspaces = [
      { imgSrc: Icons.cog, label: 'Client contract' },
      { imgSrc: Icons.cog, label: 'Supplier contract' },
      { imgSrc: Icons.entities2, label: 'Corporate' },
      { imgSrc: Icons.cog, label: 'Group Norms' },
      { imgSrc: Icons.cog, label: 'Real estate contracts' },
   ];

   const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3.5,
      slidesToScroll: 1,
      arrows: false,
   };

   return (
      <Container>
         <SectionHeader>Workspaces</SectionHeader>
         <Slider {...settings}>
            {dataWorkspaces.map((el) => (
               <div key={el.label}>
                  <SliderTile
                     bgImgSrc="https://picsum.photos/300"
                     title={el.label}
                     imgSrc={el.imgSrc}
                  />
               </div>
            ))}
         </Slider>
      </Container>
   );
};

export default Workspaces;
