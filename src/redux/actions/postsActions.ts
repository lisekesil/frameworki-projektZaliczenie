import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes/postTypes';

import { ISinglePost } from '../entities/posts';

export const getPosts = (): Promise<ISinglePost[]> =>
   ((dispatch: Dispatch) => {
      return fetch('https://jsonplaceholder.typicode.com/posts')
         .then((res) => res.json())
         .then((posts: ISinglePost[]) => {
            dispatch({
               type: actionTypes.GET_POSTS,
               posts,
            });
         });
   }) as any;
