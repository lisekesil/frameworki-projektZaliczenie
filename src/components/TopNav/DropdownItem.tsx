import React from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';

const Item = styled.li`
   display: flex;
   align-items: center;

   font-size: ${fontSize[16]};
   font-weight: 700;
   color: ${Colors.darkblue};
   margin: 0 30px 0 5px;
   padding: 10px;
   box-sizing: border-box;
`;

const Icon = styled.img`
   width: 25px;
   margin-right: 15px;
`;

export interface DropdownItemProps {
   imgSrc: string;
   label: string;
   onClick: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ imgSrc, label, onClick }) => {
   return (
      <Item onClick={onClick}>
         <Icon src={imgSrc} alt={label} />
         <span>{label}</span>
      </Item>
   );
};

export default DropdownItem;
