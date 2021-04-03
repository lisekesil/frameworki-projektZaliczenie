import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';

const Item = styled.li`
   display: flex;
   align-items: center;

   font-size: ${fontSize[16]};
   font-weight: 700;
   color: ${Colors.darkblue};
   margin: 15px 30px;
   box-sizing: border-box;
`;

const ItemImg = styled.img`
   width: 25px;
   margin-right: 15px;
`;

export interface LeftMenuListItemProps {
   imgSrc: string;
   label: string;
}

const LeftMenuListItem: React.FC<LeftMenuListItemProps> = ({ imgSrc, label }) => {
   return (
      <Item>
         <ItemImg src={imgSrc} alt={label} />
         <span>{label}</span>
      </Item>
   );
};

export default LeftMenuListItem;
