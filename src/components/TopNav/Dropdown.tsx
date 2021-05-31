import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';
import { useSelector } from 'react-redux';
import { IUsersReducer } from '../../redux/reducers/usersReducers';
import { IState } from '../../redux/reducers';

import { Colors } from '../../styledHelpers/Colors';
import DropdownItem from './DropdownItem';
import Search from '../common/Search/Search';
import { fontSize } from '../../styledHelpers/FontSizes';
import Icon from '../common/Icon/Icon';
import Icons from '../common/Icon/Icons.enum';
import { IPhotosReducer } from '../../redux/reducers/photosReducers';

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

const OptionsWrapper = styled.div`
   width: 100%;
   max-height: 40vh;
   overflow-y: scroll;
`;

const SectionLabel = styled.h4`
   font-size: ${fontSize[14]};
   color: ${Colors.darkgrey};
   padding: 10px;
`;
const Profile = styled(Link)`
   display: flex;
   margin: 0 30px 0 5px;
   padding: 10px;
`;

const ProfileImg = styled.img`
   border-radius: 50%;
   width: 32px;
   margin-right: 15px;
`;

const ProfileLabel = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
`;

const ProfileName = styled.span`
   font-weight: 700;
   color: ${Colors.darkblue};
`;

const ProfileSee = styled.span`
   color: ${Colors.blue};
   font-weight: 700;
   font-size: ${fontSize[14]};
`;

const Footer = styled.footer`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 15px;
   border-top: 1px solid ${Colors.lightgrey};
   width: 100%;

   span {
      margin-left: 20px;
      color: ${Colors.grey};
      font-weight: 400;
   }
`;

export interface DropdownProps {}

const Dropdown: React.FC<DropdownProps> = () => {
   const { usersList, photos } = useSelector<IState, IUsersReducer & IPhotosReducer>(
      (globalState) => ({
         ...globalState.users,
         ...globalState.photos,
      }),
   );

   const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
   const [filtered, setFiltered] = useState<{ imgSrc: string; label: string }[]>([]);

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

   const allData = [...dataPlatform, ...dataWorkspaces];

   const filterMenu = (e: ChangeEvent<HTMLInputElement>) => {
      const filtered = allData.filter((el) =>
         el.label.toLowerCase().includes(e.target.value.toLowerCase()),
      );
      setFiltered(filtered);
   };

   return (
      <>
         <SelectPage ref={wrapperRef}>
            <Link to="/">
               <DropdownItem onClick={closeDropdown} imgSrc="./icons/house2.png" label="Home" />
            </Link>
            <ToggleMenu onClick={toggleDropdown}>
               <Icon
                  width="10px"
                  height="10px"
                  imgSrc={dropdownOpen ? Icons.plus : Icons.arrowDown}
               />
            </ToggleMenu>

            {dropdownOpen && (
               <>
                  <Filter>
                     <Search width="220px" placeholder="Filter" onChange={(e) => filterMenu(e)} />
                  </Filter>
                  <OptionsWrapper>
                     {filtered.length > 0 && filtered.length < allData.length ? (
                        filtered.map((el, index) => (
                           <Link key={el.label + index} to={'/' + el.label}>
                              <DropdownItem
                                 onClick={closeDropdown}
                                 imgSrc={el.imgSrc}
                                 label={el.label}
                              />
                           </Link>
                        ))
                     ) : (
                        <>
                           <SectionLabel>Platform</SectionLabel>
                           {dataPlatform.map((el, index) => (
                              <Link key={el.label + index} to={'/' + el.label}>
                                 <DropdownItem
                                    onClick={closeDropdown}
                                    imgSrc={el.imgSrc}
                                    label={el.label}
                                 />
                              </Link>
                           ))}
                           <SectionLabel>Workspaces</SectionLabel>
                           {dataWorkspaces.map((el, index) => (
                              <Link key={el.label + index} to={'/' + el.label}>
                                 <DropdownItem
                                    onClick={closeDropdown}
                                    imgSrc={el.imgSrc}
                                    label={el.label}
                                 />
                              </Link>
                           ))}
                        </>
                     )}
                  </OptionsWrapper>
                  <SectionLabel>Account</SectionLabel>
                  <Profile to="/profile" onClick={closeDropdown}>
                     <ProfileImg src={photos[usersList[5].id].thumbnailUrl} alt="" />
                     <ProfileLabel>
                        <ProfileName>{usersList[5].name}</ProfileName>
                        <ProfileSee>See profile</ProfileSee>
                     </ProfileLabel>
                  </Profile>
                  <DropdownItem onClick={closeDropdown} imgSrc={Icons.privacy} label="Privacy" />
                  <DropdownItem onClick={closeDropdown} imgSrc={Icons.settings} label="Settings" />
                  <Footer>
                     <Icon imgSrc={Icons.logout} width="24px" height="24px" />
                     <span>Logout</span>
                  </Footer>
               </>
            )}
         </SelectPage>
      </>
   );
};

export default Dropdown;
