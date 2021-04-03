import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import { Colors } from '../../styledHelpers/Colors';
import DropdownItem from './DropdownItem';

const SelectPage = styled.div`
   background-color: ${Colors.white};
   position: absolute;
   top: 0;
   left: 80px;

   width: 200px;

   display: flex;
   flex-direction: column;
   align-items: flex-start;

   border-radius: 7px;
`;

const ToggleMenu = styled.span`
   position: absolute;
   right: 10px;
   top: 10px;
`;

export interface DropdownProps {}

const Dropdown: React.FC<DropdownProps> = () => {
   const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();

   const data = [
      { imgSrc: './icons/publications.png', label: 'Publications' },
      { imgSrc: './icons/ecosystem.png', label: 'Ecosystem' },
      { imgSrc: './icons/entities.png', label: 'Entities' },
   ];

   return (
      <>
         <SelectPage ref={wrapperRef}>
            <Link to="/">
               <DropdownItem onClick={closeDropdown} imgSrc="./icons/house2.png" label="Home" />
            </Link>
            <ToggleMenu onClick={toggleDropdown}>{dropdownOpen ? 'X' : 'V'}</ToggleMenu>

            {dropdownOpen && (
               <>
                  {data.map((el) => (
                     <Link to={'/' + el.label}>
                        <DropdownItem onClick={closeDropdown} imgSrc={el.imgSrc} label={el.label} />
                     </Link>
                  ))}
               </>
            )}
         </SelectPage>
      </>
   );
};

export default Dropdown;
