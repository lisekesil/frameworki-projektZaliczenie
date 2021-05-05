import { ISingleComment } from '../../entities/comments';

export const GET_COMMENTS = 'GET_COMMENTS';

export interface ICommentTypes {
   GET_COMMENTS: {
      comments: ISingleComment[];
   };
}
