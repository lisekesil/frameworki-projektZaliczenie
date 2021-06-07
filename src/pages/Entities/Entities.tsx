import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';
import { IState } from '../../redux/reducers';
import { IPhotosReducer } from '../../redux/reducers/photosReducers';

import {
   List,
   Grid,
   Maximize2,
   Minimize2,
   Sliders,
   Filter,
   Share2,
   MoreHorizontal,
   Disc,
} from 'react-feather';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import Entity from './entitiesComponents/Entity';
import Icons from '../../components/Icon/Icons.enum';
import Icon from '../../components/Icon/Icon';
import { shadow } from '../../styledHelpers/Shadow';
import Search from '../../components/Search/Search';
import Filters from './entitiesComponents/Filters';

interface WrapperProps {
   isFullscreen: boolean;
}

const Wrapper = styled.article<WrapperProps>`
   display: flex;
   flex-direction: column;

   width: 100%;
   min-height: 100vh;
   padding: 20px;
   background-color: ${Colors.white};

   position: ${(props) => (props.isFullscreen ? 'absolute' : 'relative')};
   top: 0;
   left: 0;
   right: 0;
`;

const Top = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 10px;

   h1 {
      font-weight: 700;
      color: ${Colors.darkblue};
      font-size: ${fontSize[18]};
   }

   div {
      display: flex;
   }

   button {
      padding: 2px 5px;
      color: ${Colors.blue};
      border: 1px solid ${Colors.lightgrey};
      font-weight: 700;
      cursor: pointer;

      display: flex;
      align-items: center;

      svg {
         margin: 0 3px;
         width: 20px;
      }
   }
`;
const Options = styled.div`
   display: flex;
   align-items: center;
   margin: 10px 20px 15px;

   width: 100%;

   button {
      display: flex;
      align-items: center;
      padding: 1px 8px;
      color: ${Colors.darkgrey};
      background-color: transparent;
      border: none;
      border-left: 1px solid ${Colors.lightgrey};

      cursor: pointer;

      &:hover {
         color: ${Colors.black};
      }
   }

   svg {
      width: 16px;
      margin: 0 3px;
   }
`;

const OptionsAllDiv = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

   width: 90px;
   padding: 5px 8px;
   margin-right: 10px;
   box-shadow: ${shadow};
   border-radius: 10px;
   color: ${Colors.blue};
   background-color: ${Colors.background};
`;

const OptionsSearch = styled.div`
   display: flex;
   position: absolute;
   right: 0;
   margin-right: 50px;
`;

interface ContentProps {
   isList: boolean;
}

const Content = styled.div<ContentProps>`
   display: grid;
   width: 100%;
   grid-template-columns: ${(props) =>
      props.isList ? '1fr' : 'repeat(auto-fill, minmax(270px, 1fr))'};
   gap: 10px;
   margin: auto;
`;

const Select = styled.select`
   background-color: transparent;
   border: none;
   font-size: ${fontSize[16]};
   font-weight: 700;
   padding-right: 10px;
`;

export interface EntitiesProps {}

const Entities: React.FC<EntitiesProps> = () => {
   const { photos } = useSelector<IState, IPhotosReducer>((globalState) => ({
      ...globalState.photos,
   }));

   const entities = [
      {
         title: 'Tymbark',
         footer: 'Polska marka',
         photo: photos[1]?.thumbnailUrl,
      },
      {
         title: 'Genesis',
         footer: 'Turbo',
         photo: photos[2]?.thumbnailUrl,
      },
      {
         title: 'Fossil',
         footer: 'Culture curious',
         photo: photos[3]?.thumbnailUrl,
      },
      {
         title: 'Żywiec zdrój',
         footer: 'Niegazowany',
         photo: photos[4]?.thumbnailUrl,
      },
      {
         title: 'SpongeBob',
         footer: 'Squarepants',
         photo: photos[5]?.thumbnailUrl,
      },
      {
         title: 'Yves Rocher',
         footer: 'Pure calmille',
         photo: photos[6]?.thumbnailUrl,
      },
      {
         title: 'Reeses',
         footer: 'Penaut butter',
         photo: photos[7]?.thumbnailUrl,
      },
      {
         title: 'Dell',
         footer: 'G5',
         photo: photos[8]?.thumbnailUrl,
      },
      {
         title: 'HyperX',
         footer: 'XXX',
         photo: photos[9]?.thumbnailUrl,
      },
      {
         title: 'Wittchen',
         footer: 'Edax',
         photo: photos[10]?.thumbnailUrl,
      },
      {
         title: 'Tymbark',
         footer: 'Polska marka',
         photo: photos[1]?.thumbnailUrl,
      },
      {
         title: 'Genesis',
         footer: 'Turbo',
         photo: photos[2]?.thumbnailUrl,
      },
      {
         title: 'Fossil',
         footer: 'Culture curious',
         photo: photos[3]?.thumbnailUrl,
      },
      {
         title: 'Żywiec zdrój',
         footer: 'Niegazowany',
         photo: photos[4]?.thumbnailUrl,
      },
      {
         title: 'SpongeBob',
         footer: 'Squarepants',
         photo: photos[5]?.thumbnailUrl,
      },
      {
         title: 'Yves Rocher',
         footer: 'Pure calmille',
         photo: photos[6]?.thumbnailUrl,
      },
      {
         title: 'Reeses',
         footer: 'Penaut butter',
         photo: photos[7]?.thumbnailUrl,
      },
      {
         title: 'Dell',
         footer: 'G5',
         photo: photos[8]?.thumbnailUrl,
      },
      {
         title: 'HyperX',
         footer: 'XXX',
         photo: photos[9]?.thumbnailUrl,
      },
      {
         title: 'Wittchen',
         footer: 'Edax',
         photo: photos[10]?.thumbnailUrl,
      },
      {
         title: 'Tymbark',
         footer: 'Polska marka',
         photo: photos[1]?.thumbnailUrl,
      },
      {
         title: 'Genesis',
         footer: 'Turbo',
         photo: photos[2]?.thumbnailUrl,
      },
      {
         title: 'Fossil',
         footer: 'Culture curious',
         photo: photos[3]?.thumbnailUrl,
      },
      {
         title: 'Żywiec zdrój',
         footer: 'Niegazowany',
         photo: photos[4]?.thumbnailUrl,
      },
      {
         title: 'SpongeBob',
         footer: 'Squarepants',
         photo: photos[5]?.thumbnailUrl,
      },
      {
         title: 'Yves Rocher',
         footer: 'Pure calmille',
         photo: photos[6]?.thumbnailUrl,
      },
      {
         title: 'Reeses',
         footer: 'Penaut butter',
         photo: photos[7]?.thumbnailUrl,
      },
      {
         title: 'Dell',
         footer: 'G5',
         photo: photos[8]?.thumbnailUrl,
      },
      {
         title: 'HyperX',
         footer: 'XXX',
         photo: photos[9]?.thumbnailUrl,
      },
      {
         title: 'Wittchen',
         footer: 'Edax',
         photo: photos[10]?.thumbnailUrl,
      },
   ];

   const [isList, setIsList] = useState(false);
   const [isSorted, setIsSorted] = useState(false);
   const [isFilterVisible, setIsFilterVisible] = useState(false);
   const [isFullscreen, setIsFullscreen] = useState(false);
   const [data, setData] = useState(entities);
   const url = window.location.href;

   const sortData = () => {
      if (!isSorted) {
         data.sort((a, b) => a.title.localeCompare(b.title));
      } else {
         data.sort((a, b) => b.title.localeCompare(a.title));
      }
      setIsSorted(!isSorted);
   };

   const filter = (e: any) => {
      const text = e.target.value.toLowerCase();
      const filtered = entities.filter((el) => el.title.toLowerCase().includes(text));
      setData(filtered);
   };

   return (
      <Wrapper isFullscreen={isFullscreen}>
         <Top>
            <h1>Entities</h1>
            <div>
               <button onClick={() => setIsList(true)}>
                  <List /> {isList && 'List'}
               </button>
               <button onClick={() => setIsList(false)}>
                  <Grid /> {!isList && 'Mosaic'}
               </button>
            </div>
         </Top>
         <Options>
            <OptionsAllDiv>
               <Disc />
               All
               <Icon width="8px" height="8px" imgSrc={Icons.arrowDown} />
            </OptionsAllDiv>
            <MoreHorizontal />
            <button onClick={sortData}>
               <Sliders /> Sort
            </button>
            <button onClick={() => setIsFilterVisible(!isFilterVisible)}>
               <Filter /> Filters
            </button>
            <button onClick={() => setIsFullscreen(!isFullscreen)}>
               {isFullscreen ? <Minimize2 /> : <Maximize2 />}
            </button>
            <CopyToClipboard text={url}>
               <button>
                  <Share2 /> Share
               </button>
            </CopyToClipboard>
            <OptionsSearch>
               <Search width="150px" placeholder="Filter..." onChange={filter} />
               <Select>
                  <option value="all">All</option>
                  <option value="followed">Followed</option>
               </Select>
            </OptionsSearch>
         </Options>
         {isFilterVisible && <Filters />}
         <Content isList={isList}>
            {data.map((el, index) => (
               <Entity key={index} title={el.title} footer={el.footer} imgUrl={el.photo} />
            ))}
         </Content>
      </Wrapper>
   );
};

export default Entities;
