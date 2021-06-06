import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Formik, Field } from 'formik';
import { Edit3, Save } from 'react-feather';
import { useSelector } from 'react-redux';
import { IState } from '../../redux/reducers';
import { IUsersReducer } from '../../redux/reducers/usersReducers';
import { IPhotosReducer } from '../../redux/reducers/photosReducers';

import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import Icon from '../../components/Icon/Icon';
import Icons from '../../components/Icon/Icons.enum';

import PanelInformations from './profileComponents/PanelInformations';
import Proposals from './profileComponents/Proposals';
import Reviews from './profileComponents/Reviews';
import Fees from './profileComponents/Fees';
import Expertise from './profileComponents/Expertise';

const Wrapper = styled.article`
   display: flex;
   flex-direction: column;

   width: 750px;
   margin-right: 50px;
   margin-bottom: 50px;
   padding: 20px;
   background-color: ${Colors.white};
`;

const Top = styled.section`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   width: 100%;
   margin-bottom: 20px;

   div {
      display: flex;
      align-items: center;

      span {
         margin-left: 10px;
      }
   }
`;

const Main = styled.section`
   display: flex;
   align-items: center;
   width: 100%;
   padding: 20px;
   padding-bottom: 40px;
   position: relative;
   border-bottom: 1px solid ${Colors.lightgrey};
`;

const EditControls = styled.div`
   position: absolute;
   top: 20px;
   right: 30px;
   cursor: pointer;
`;

const MainPhotoContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   span {
      color: ${Colors.blue};
      margin-top: 10px;
   }
`;

const MainPhoto = styled.img`
   width: 64px;
   border-radius: 50%;
`;

const MainForm = styled.form`
   display: flex;
   justify-content: space-evenly;
   /* flex-grow: 100; */
   align-items: flex-end;
   color: ${Colors.darkblue};

   div {
      display: flex;
      flex-direction: column;
      padding: 0 50px;
   }

   input {
      width: 190px;
      border: 1px solid black;
      background-color: transparent;
      padding: 3px;
      padding-left: 0px;
      margin-bottom: 5px;
      font-family: inherit;
      font-size: ${fontSize[16]};
      color: ${Colors.darkblue};
   }

   input:disabled {
      border: none;
   }

   input[name='fullname'],
   input[name='company'] {
      font-weight: 700;
   }
`;

export interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
   const [isEditingMain, setIsEditingMain] = useState(false);

   const formRef = useRef<HTMLFormElement>(null);

   const { usersList, photos } = useSelector<IState, IUsersReducer & IPhotosReducer>(
      (globalState) => ({
         ...globalState.users,
         ...globalState.photos,
      }),
   );

   const editMainForm = () => {
      if (formRef && formRef.current) {
         (formRef.current[0] as HTMLInputElement).disabled = isEditingMain;
         (formRef.current[1] as HTMLInputElement).disabled = isEditingMain;
         (formRef.current[2] as HTMLInputElement).disabled = isEditingMain;
         (formRef.current[3] as HTMLInputElement).disabled = isEditingMain;
         (formRef.current[4] as HTMLInputElement).disabled = isEditingMain;
      }
      setIsEditingMain(!isEditingMain);
   };

   return (
      <Wrapper>
         <Top>
            <div>
               <Icon imgSrc={Icons.cog} width="20px" height="20px" />
               <span> Message</span>
            </div>
            <div>
               <Icon imgSrc={Icons.cog} width="20px" height="20px" />
               <span> Create a request</span>
            </div>
            <div>
               <Icon imgSrc={Icons.cog} width="20px" height="20px" />
               <span> Add to a cluster</span>
            </div>
         </Top>
         <Main>
            <MainPhotoContainer>
               <MainPhoto src={photos[usersList[5]?.id]?.thumbnailUrl} alt="" />
               <span>See profile</span>
            </MainPhotoContainer>

            <Formik
               initialValues={{
                  fullname: usersList[5]?.name,
                  company: usersList[5]?.company?.name,
                  city: usersList[5]?.address?.city,
                  email: usersList[5]?.email,
                  phone: '12 115 997 620',
               }}
               onSubmit={(values, formikBag) => {
                  console.log(values, formikBag);
               }}
            >
               {(props) => (
                  <MainForm ref={formRef} onSubmit={props.handleSubmit}>
                     <div>
                        <Field name="fullname" type="text" disabled />
                        <Field name="company" type="text" disabled />
                        <Field name="city" type="text" disabled />
                        <span>Partner</span>
                     </div>
                     <div>
                        <Field name="email" type="email" disabled />
                        <Field name="phone" type="text" disabled />
                     </div>
                  </MainForm>
               )}
            </Formik>
            <EditControls>
               {isEditingMain ? (
                  <Save onClick={editMainForm} size={24} color="black" />
               ) : (
                  <Edit3 onClick={editMainForm} size={24} color="black" />
               )}
            </EditControls>
         </Main>
         <Expertise />
         <PanelInformations />
         <Proposals />
         <Reviews />
         <Fees />
      </Wrapper>
   );
};

export default Profile;
