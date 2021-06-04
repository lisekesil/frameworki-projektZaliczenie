import { combineReducers } from 'redux';
// import { ICommentsReducer } from './commentsReducers';

import users, { IUsersReducer } from './usersReducers';
import comments, { ICommentsReducer } from './commentsReducers';
import posts, { IPostsReducer } from './postsReducers';
import photos, { IPhotosReducer } from './photosReducers';
import workspaces, { IWorkspacesReducer } from './workspacesReducers';

export default combineReducers({
   users,
   comments,
   posts,
   photos,
   workspaces,
});

export interface IState {
   users: IUsersReducer;
   comments: ICommentsReducer;
   posts: IPostsReducer;
   photos: IPhotosReducer;
   workspaces: IWorkspacesReducer;
}
