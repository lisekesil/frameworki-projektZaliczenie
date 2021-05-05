import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import { Colors } from '../../styledHelpers/Colors';
import DropdownItem from './DropdownItem';
import Search from '../common/Search/Search';
import { fontSize } from '../../styledHelpers/FontSizes';
import Icon from '../common/Icon/Icon';
import Icons from '../common/Icon/Icons.enum';

const SelectPage = styled.div`
   background-color: ${Colors.white};
   position: absolute;
   top: 0;
   left: 80px;

   width: 250px;

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

const Filter = styled.div`
   margin-left: 15px;
`;

const SectionLabel = styled.h4`
   font-size: ${fontSize[14]};
   color: ${Colors.darkgrey};
   padding: 10px;
`;

export interface DropdownProps {}

const Dropdown: React.FC<DropdownProps> = () => {
   const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();

   const dataPlatform = [
      { imgSrc: './icons/publications.png', label: 'Publications' },
      { imgSrc: './icons/people.png', label: 'People' },
      { imgSrc: './icons/entities.png', label: 'Entities' },
      { imgSrc: './icons/administration.png', label: 'Administration' },
   ];

   const dataWorkspaces = [
      { imgSrc: './icons/cog.png', label: 'Client contract' },
      { imgSrc: './icons/cog.png', label: 'Supplier contract' },
      { imgSrc: './icons/entities2.png', label: 'Corporate' },
      { imgSrc: './icons/cog.png', label: 'Group Norms' },
      { imgSrc: './icons/cog.png', label: 'Real estate contracts' },
   ];

   return (
      <>
         <SelectPage ref={wrapperRef}>
            <Link to="/">
               <DropdownItem onClick={closeDropdown} imgSrc="./icons/house2.png" label="Home" />
            </Link>
            <ToggleMenu onClick={toggleDropdown}>
               {/* {dropdownOpen ? 'X' : 'V'} */}
               <Icon
                  width="10px"
                  height="10px"
                  imgSrc={dropdownOpen ? Icons.plus : Icons.arrowDown}
               />
            </ToggleMenu>

            {dropdownOpen && (
               <>
                  <Filter>
                     <Search width="220px" placeholder="Filter" />
                  </Filter>
                  <SectionLabel>Platform</SectionLabel>
                  {dataPlatform.map((el) => (
                     <Link to={'/' + el.label}>
                        <DropdownItem onClick={closeDropdown} imgSrc={el.imgSrc} label={el.label} />
                     </Link>
                  ))}
                  <SectionLabel>Workspaces</SectionLabel>
                  {dataWorkspaces.map((el) => (
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
