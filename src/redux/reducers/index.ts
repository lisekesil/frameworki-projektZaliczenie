import { combineReducers } from 'redux';
// import { ICommentsReducer } from './commentsReducers';

import users, { IUsersReducer } from './usersReducers';
import comments, { ICommentsReducer } from './commentsReducers';

export default combineReducers({
   users,
   comments,
});

export interface IState {
   users: IUsersReducer;
   comments: ICommentsReducer;
}
