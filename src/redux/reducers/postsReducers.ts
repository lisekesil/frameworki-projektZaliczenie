import { ISinglePost } from '../entities/posts';
import * as actionTypes from '../actions/actionTypes/postTypes';

export interface IPostsReducer {
   posts: ISinglePost[];
}

const defaultState = (): IPostsReducer => ({
   posts: [],
});

//eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
   switch (action.type) {
      case actionTypes.GET_POSTS: {
         const payload: actionTypes.IPostTypes['GET_POSTS'] = action;
         return {
            ...state,
            posts: payload.posts,
         };
      }
      default: {
         return state;
      }
   }
};
