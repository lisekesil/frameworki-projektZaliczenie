import { ISingleComment } from '../entities/comments';

import * as actionTypes from '../actions/actionTypes/commentTypes';

export interface ICommentsReducer {
   comments: ISingleComment[];
}

const defaultState = (): ICommentsReducer => ({
   comments: [],
});

//eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
   switch (action.type) {
      case actionTypes.GET_COMMENTS: {
         const payload: actionTypes.ICommentTypes['GET_COMMENTS'] = action;
         return {
            ...state,
            comments: payload.comments,
         };
      }
      default: {
         return state;
      }
   }
};
