import React, { useEffect, useState } from 'react';
import { MessageCircle, User } from 'react-feather';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IState } from '../../../redux/reducers';
import { IUsersReducer } from '../../../redux/reducers/usersReducers';
import { IPhotosReducer } from '../../../redux/reducers/photosReducers';
import { Colors } from '../../../styledHelpers/Colors';
import { Field, Formik } from 'formik';
import { fontSize } from '../../../styledHelpers/FontSizes';
import { Edit3, Save } from 'react-feather';
import Select from './Select';

const Wrapper = styled.div`
   border-bottom: 1px solid ${Colors.lightgrey};
   padding: 20px 10px;
   position: relative;
`;

const Panel = styled.section`
   display: flex;
   flex-direction: column;
   color: ${Colors.darkblue};

   h3 {
      font-weight: 700;
   }

   label {
      color: ${Colors.grey};
      margin: 20px 0 10px;
   }

   input:disabled {
      border: none;
      background-color: transparent;
   }

   input[type='text'] {
      width: 70%;
      padding: 5px;
      font-size: ${fontSize[16]};
      font-family: inherit;
   }

   input[type='file'] {
      margin-top: 10px;
      margin-bottom: 20px;
      background-color: ${Colors.lightgrey};
      padding: 10px;
      width: 70%;
      cursor: pointer;
   }
`;

const Services = styled.section`
   display: flex;
   flex-direction: column;
   color: ${Colors.darkblue};

   h3 {
      font-weight: 700;
      margin-bottom: 20px;
   }

   span {
      margin-bottom: 20px;
   }
`;

const Internal = styled.div`
   width: 70%;
   display: flex;
   align-items: center;
   background-color: ${Colors.lightgrey};
   padding: 10px;
   margin-bottom: 3px;

   img {
      width: 40px;
      border-radius: 50%;
      margin-right: 10px;
   }

   div {
      display: flex;
      margin-right: 40px;
   }

   select:disabled {
      opacity: 1;
      background-color: transparent;
      border: none;
      font-size: ${fontSize[16]};
      color: #000;
      -webkit-appearance: none;
      -moz-appearance: none;
      text-indent: 1px;
      text-overflow: '';
   }
`;

const EditControls = styled.div`
   position: absolute;
   top: 20px;
   right: 30px;
   cursor: pointer;
`;

export interface PanelInformationsProps {}

const PanelInformations: React.FC<PanelInformationsProps> = () => {
   const [isEditing, setIsEditing] = useState(false);
   const [users, setUsers] = useState<{ key: string; value: string }[]>([]);

   const { usersList, photos } = useSelector<IState, IUsersReducer & IPhotosReducer>(
      (globalState) => ({
         ...globalState.users,
         ...globalState.photos,
      }),
   );

   useEffect(() => {
      if (usersList) {
         const newUsers = usersList.map((u) => {
            return {
               key: u.name,
               value: u.name,
            };
         });
         setUsers(newUsers);
      }
   }, [usersList]);

   const editPanel = () => {
      setIsEditing(!isEditing);
   };

   return (
      <Wrapper>
         <Formik
            initialValues={{
               fee: '610$/hour(Negociated)',
               terms: 'Monthly 10k$ retainer - see with Jeanny Smith',
            }}
            onSubmit={(values) => {
               console.log(values);
            }}
         >
            <>
               <Panel>
                  <h3>Panel informations</h3>
                  <label>Hourly fee</label>
                  <Field name="fee" type="text" disabled={!isEditing} />
                  <label>Terms & conditions</label>
                  <Field name="terms" type="text" disabled={!isEditing} />
                  <input type="file" />
               </Panel>
               <Services>
                  <h3>Services & projects</h3>
                  <span>Corporate M&A and international acquisitions</span>
                  <h3>Internal correspondents</h3>
                  <Internal>
                     <img src={photos[usersList[2]?.id]?.thumbnailUrl} alt="avatar" />
                     <Select options={users} selectName="users" isDisabled={isEditing}></Select>
                     <div>
                        <MessageCircle size={20} />
                        <p>Message</p>
                     </div>
                     <div>
                        <User size={20} />
                        <p>Profile</p>
                     </div>
                  </Internal>
                  <Internal>
                     <img src={photos[usersList[2]?.id]?.thumbnailUrl} alt="avatar" />
                     <Select options={users} selectName="users" isDisabled={isEditing}></Select>
                     <div>
                        <MessageCircle size={20} />
                        <p>Message</p>
                     </div>
                     <div>
                        <User size={20} />
                        <p>Profile</p>
                     </div>
                  </Internal>
               </Services>
            </>
         </Formik>
         <EditControls>
            {isEditing ? (
               <Save onClick={editPanel} size={24} color="black" />
            ) : (
               <Edit3 onClick={editPanel} size={24} color="black" />
            )}
         </EditControls>
      </Wrapper>
   );
};

export default PanelInformations;
