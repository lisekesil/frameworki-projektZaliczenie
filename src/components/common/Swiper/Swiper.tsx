import * as React from 'react';
import styled from 'styled-components';
import SliderTile from './SliderTile';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Icons from '../Icon/Icons.enum';
import { useSelector } from 'react-redux';
import { IState } from '../../../redux/reducers';
import { IWorkspacesReducer } from '../../../redux/reducers/workspacesReducers';
import { Link } from 'react-router-dom';

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
   const { workspaces } = useSelector<IState, IWorkspacesReducer>((globalState) => ({
      ...globalState.workspaces,
   }));

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
            {workspaces.map((el) => (
               <Link to={'/' + el.link} key={el.label}>
                  <SliderTile
                     bgImgSrc="https://picsum.photos/300"
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
