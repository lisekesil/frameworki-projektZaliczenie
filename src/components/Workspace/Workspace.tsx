import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IState } from '../../redux/reducers';
import { IPhotosReducer } from '../../redux/reducers/photosReducers';

import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import { shadow } from '../../styledHelpers/Shadow';
import Icon from '../common/Icon/Icon';
import Icons from '../common/Icon/Icons.enum';
import ResumeYourWork from '../common/ResumeYourWork/ResumeYourWork';
import { IWorkspacesReducer } from '../../redux/reducers/workspacesReducers';

const Wrapper = styled.div`
   padding: 25px;
   background-color: ${Colors.white};
`;

interface TileProps {
   bgImgSrc: string;
}

const Tile = styled.article<TileProps>`
   width: 100%;
   height: 250px;
   background-image: url(${(p) => p.bgImgSrc});
   box-shadow: ${shadow};
   border-radius: 10px;

   position: relative;
`;

const ContentContainer = styled.div`
   display: flex;
   align-items: center;
   background-color: ${Colors.white};
   border-bottom-right-radius: 10px;
   border-bottom-left-radius: 10px;

   position: absolute;
   bottom: 0;
   width: 100%;
   height: 100px;
   padding: 5px 20px;

   div {
      height: 100%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h3 {
         font-weight: 700;
         font-size: ${fontSize[18]};
      }

      p {
         color: ${Colors.grey};
      }
   }
`;

const Cards = styled.section`
   width: 100%;
   padding: 40px 20px;
   background-color: ${Colors.grey};
   display: flex;
   justify-content: space-between;
   align-items: stretch;

   div {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      width: 280px;
      padding: 20px 15px;
      background-color: ${Colors.white};
      color: ${Colors.darkblue};
      box-shadow: ${shadow};
      border-radius: 7px;
   }

   h5 {
      font-size: ${fontSize[18]};
      margin: 15px 0 10px;

      span {
         font-weight: 700;
      }
   }

   p {
      line-height: 1.2;
      font-size: ${fontSize[14]};
   }
`;

export interface WorkspaceProps {}

const Workspace: React.FC<WorkspaceProps> = () => {
   const { photos, workspaces } = useSelector<IState, IPhotosReducer & IWorkspacesReducer>(
      (globalState) => ({
         ...globalState.photos,
         ...globalState.workspaces,
      }),
   );

   const { name } = useParams<{ name: string }>();
   const currentWorkspace = workspaces.find((el) => el.link === name)!;

   return (
      <article>
         <Wrapper>
            <Tile bgImgSrc={photos[0]?.url}>
               <ContentContainer>
                  <Icon imgSrc={currentWorkspace?.imgSrc} width="50px" height="50px" />
                  <div>
                     <h3>{currentWorkspace?.label}</h3>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, at reiciendis
                        maxime voluptatibus eum i{' '}
                     </p>
                  </div>
               </ContentContainer>
            </Tile>
         </Wrapper>
         <Cards>
            <div>
               <Icon imgSrc={Icons.entities} width="40px" height="40px" />
               <h5>
                  Explore your <span>entities</span>
               </h5>
               <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat provident qui
                  porro!
               </p>
            </div>
            <div>
               <Icon imgSrc={Icons.house2} width="40px" height="40px" />
               <h5>
                  Structure the <span>ownership</span>
               </h5>
               <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat provident qui
                  porro!
               </p>
            </div>
            <div>
               <Icon imgSrc={Icons.people} width="50px" height="40px" />
               <h5>
                  Define the <span>calendar</span>
               </h5>
               <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat provident qui
                  porro!
               </p>
            </div>
         </Cards>
         <ResumeYourWork />
      </article>
   );
};

export default Workspace;
