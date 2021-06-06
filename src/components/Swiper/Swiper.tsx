import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SwiperTile from './SwiperTile';

import { useSelector } from 'react-redux';
import { IState } from '../../redux/reducers';
import { IWorkspacesReducer } from '../../redux/reducers/workspacesReducers';
import { IPhotosReducer } from '../../redux/reducers/photosReducers';

const Container = styled.section`
   width: 100%;
   margin-bottom: 20px;
`;

const SectionHeader = styled.h2`
   margin: 20px 10px 10px;
   font-weight: 700;
`;

export interface SwiperProps {}

const Swiper: React.FC<SwiperProps> = () => {
   const { workspaces, photos } = useSelector<IState, IWorkspacesReducer & IPhotosReducer>(
      (globalState) => ({
         ...globalState.workspaces,
         ...globalState.photos,
      }),
   );

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
            {workspaces.map((el, index) => (
               <Link to={'/' + el.link} key={el.label}>
                  <SwiperTile
                     bgImgSrc={photos[index]?.thumbnailUrl}
                     title={el.label}
                     imgSrc={el.imgSrc}
                  />
               </Link>
            ))}
         </Slider>
      </Container>
   );
};

export default Swiper;
