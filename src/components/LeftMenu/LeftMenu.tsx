import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import LeftMenuListItem from './LeftMenuListItem';
import { useSelector } from 'react-redux';
import { IState } from '../../redux/reducers';
import { IUsersReducer } from '../../redux/reducers/usersReducers';
import { IPhotosReducer } from '../../redux/reducers/photosReducers';

const Wrapper = styled.section``;

const Profile = styled.div`
   margin: 0 15px;
   padding: 15px;
   width: 260px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: ${Colors.white};
   border: 1px solid ${Colors.lightgrey};
   border-radius: 7px;
   box-shadow: 0px 2px 0px 0px rgba(77, 77, 77, 0.2);
   -webkit-box-shadow: 0px 2px 0px 0px rgba(77, 77, 77, 0.2);
   -moz-box-shadow: 0px 2px 0px 0px rgba(77, 77, 77, 0.2);
`;

const ProfileContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   padding: 15px;
   border-bottom: 1px solid ${Colors.lightgrey};
`;

const ProfilePhoto = styled.img`
   border-radius: 50%;
   width: 64px;
   height: 64px;
`;

const ProfileName = styled.p`
   color: ${Colors.blue};
   margin: 10px;
   font-weight: 700;
   font-size: ${fontSize[18]};
`;

const ProfileTitle = styled.p`
   color: ${Colors.grey};
   font-size: ${fontSize[16]};
`;

const Option = styled.div`
   width: 100%;
   margin-top: 10px;
   display: flex;
   justify-content: space-between;
`;

const OptionInnerWrapper = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
`;

const OptionImage = styled.img`
   margin-right: 10px;
`;

const OptionName = styled.p`
   font-weight: 700;
   color: ${Colors.darkblue};
`;

const OptionButton = styled.button`
   background: transparent;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 3px 7px;
   border: 1px solid ${Colors.darkblue};
   border-radius: 5px;

   cursor: pointer;
`;

export const LeftMenu: FC = () => {
   const { usersList, photos } = useSelector<IState, IUsersReducer & IPhotosReducer>(
      (globalState) => ({
         ...globalState.users,
         ...globalState.photos,
      }),
   );

   return (
      <Wrapper>
         <Profile>
            <ProfileContainer>
               {usersList[5] && (
                  <>
                     <ProfilePhoto src={photos[usersList[5].id]?.thumbnailUrl} />
                     <ProfileName>{usersList[5].name}</ProfileName>
                     <ProfileTitle>{usersList[5].company.name}</ProfileTitle>
                  </>
               )}
            </ProfileContainer>
            <Option>
               <OptionInnerWrapper>
                  <OptionImage src="./icons/network.png" alt="" />
                  <OptionName>Your network</OptionName>
               </OptionInnerWrapper>
               <OptionButton>
                  <img src="./icons/user-plus.png" alt="" />
               </OptionButton>
            </Option>
            <Option>
               <OptionInnerWrapper>
                  <OptionImage src="./icons/publications.png" alt="" />
                  <OptionName>Your publications</OptionName>
               </OptionInnerWrapper>
               <OptionButton>
                  <img src="./icons/plus.png" alt="" />
               </OptionButton>
            </Option>
         </Profile>
         <ul>
            <Link to="/publications">
               <LeftMenuListItem imgSrc="./icons/publications.png" label="Publications" />
            </Link>
            <Link to="/ecosystem">
               <LeftMenuListItem imgSrc="./icons/ecosystem.png" label="Ecosystem" />
            </Link>
            <Link to="/entities">
               <LeftMenuListItem imgSrc="./icons/entities2.png" label="Entities" />
            </Link>
         </ul>
      </Wrapper>
   );
};
