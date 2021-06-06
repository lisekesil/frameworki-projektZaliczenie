import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import { shadow } from '../../../styledHelpers/Shadow';

const Tile = styled.section`
   width: 100%;
   display: flex;
   padding: 8px;
   border: 1px solid ${Colors.lightgrey};
   border-radius: 7px;
   box-shadow: ${shadow};
   -webkit-box-shadow: ${shadow};
   -moz-box-shadow: ${shadow};

   img {
      width: 80px;
      margin-right: 10px;
   }

   div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px;
   }

   h5 {
      font-weight: 700;
      color: ${Colors.darkblue};
   }

   footer {
      color: ${Colors.grey};
      font-size: ${fontSize[14]};
   }
`;

export interface EntityProps {
   imgUrl: string;
   title: string;
   footer: string;
}

const Entity: React.FC<EntityProps> = ({ imgUrl, title, footer }) => {
   return (
      <Tile>
         <img src={imgUrl} alt="" />
         <div>
            <h5>{title}</h5>
            <footer>{footer}</footer>
         </div>
      </Tile>
   );
};

export default Entity;
