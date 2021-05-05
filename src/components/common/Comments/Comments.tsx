import React from 'react';
import { ISingleComment } from '../../../redux/entities/comments';

import Comment from './Comment';

export interface CommentsProps {
   comments: ISingleComment[];
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
   return (
      <>
         {comments.map((com) => (
            <Comment key={com.id} title={com.name} body={com.body} />
         ))}
      </>
   );
};

export default Comments;
