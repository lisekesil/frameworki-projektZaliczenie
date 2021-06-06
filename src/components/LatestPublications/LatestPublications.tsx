import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../../redux/reducers';
import { IPhotosReducer } from '../../redux/reducers/photosReducers';
import { IPostsReducer } from '../../redux/reducers/postsReducers';
import { IUsersReducer } from '../../redux/reducers/usersReducers';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import Publication from '../Publication/Publication';

const LatestPublication = styled.article`
   width: 100%;
   background-color: ${Colors.white};
   margin-right: 30px;
   display: flex;
   justify-content: space-evenly;

   border-radius: 7px;
   box-shadow: 0px 2px 0px 0px rgba(77, 77, 77, 0.2);
   -webkit-box-shadow: 0px 2px 0px 0px rgba(77, 77, 77, 0.2);
   -moz-box-shadow: 0px 2px 0px 0px rgba(77, 77, 77, 0.2);
`;

const InnerWrapper = styled.div`
   width: 550px;
   padding: 20px;
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

const Header = styled.h2`
   color: ${Colors.darkblue};
   font-weight: 700;
   font-size: ${fontSize[20]};
   margin-bottom: 10px;
`;

const Footer = styled.h3`
   color: ${Colors.blue};
   font-weight: 700;
`;

export interface LatestPublicationsProps {}

const LatestPublications: React.FC = () => {
   const { usersList, photos, posts } = useSelector<
      IState,
      IUsersReducer & IPhotosReducer & IPostsReducer
   >((globalState) => ({
      ...globalState.users,
      ...globalState.photos,
      ...globalState.posts,
   }));

   return (
      <LatestPublication>
         <Publication
            isMain={true}
            photoURL={photos[0]?.url}
            title={posts[0]?.title}
            author={usersList[posts[0]?.userId]?.name}
            authorImg={photos[posts[0]?.userId]?.thumbnailUrl}
         />

         <InnerWrapper>
            <Header>Latest publications</Header>{' '}
            <Publication
               photoURL={photos[25]?.thumbnailUrl}
               title={posts[25]?.title}
               author={usersList[posts[25]?.userId]?.name}
               authorImg={photos[posts[25]?.userId]?.thumbnailUrl}
            />
            <Publication
               photoURL={photos[50]?.thumbnailUrl}
               title={posts[50]?.title}
               author={usersList[posts[50]?.userId]?.name}
               authorImg={photos[posts[50]?.userId]?.thumbnailUrl}
            />
            <Publication
               photoURL={photos[80]?.thumbnailUrl}
               title={posts[80]?.title}
               author={usersList[posts[80]?.userId]?.name}
               authorImg={photos[posts[80]?.userId]?.thumbnailUrl}
            />
            <Footer>See more publications</Footer>
         </InnerWrapper>
      </LatestPublication>
   );
};

export default LatestPublications;
