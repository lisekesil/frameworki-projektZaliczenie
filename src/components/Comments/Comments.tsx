import React from 'react';
import { useSelector } from 'react-redux';
import { ISingleComment } from '../../redux/entities/comments';
import { IState } from '../../redux/reducers';
import { IPhotosReducer } from '../../redux/reducers/photosReducers';
import { IPostsReducer } from '../../redux/reducers/postsReducers';
import { IUsersReducer } from '../../redux/reducers/usersReducers';

import Comment from './Comment';

export interface CommentsProps {
   comments: ISingleComment[];
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
   const { posts, usersList, photos } = useSelector<
      IState,
      IPostsReducer & IUsersReducer & IPhotosReducer
   >((globalState) => ({
      ...globalState.posts,
      ...globalState.users,
      ...globalState.photos,
   }));

   return (
      <>
         {comments.map((com) => {
            const post = posts.find((post) => com.postId === post.id);
            const user = usersList.find((user) => post?.userId === user.id);
            const photo = photos[user?.id!]?.thumbnailUrl;

            return (
               <Comment
                  key={com.id}
                  title={com.name}
                  body={com.body}
                  author={user?.name!}
                  photo={photo}
               />
            );
         })}
      </>
   );
};

export default Comments;
