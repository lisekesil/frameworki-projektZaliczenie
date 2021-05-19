import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes/photoTypes';

import { ISinglePhoto } from '../entities/photos';

export const getPhotos = (): Promise<ISinglePhoto[]> =>
   ((dispatch: Dispatch) => {
      return fetch('https://jsonplaceholder.typicode.com/photos')
         .then((res) => res.json())
         .then((photos: ISinglePhoto[]) => {
            dispatch({
               type: actionTypes.GET_PHOTOS,
               photos,
            });
         });
   }) as any;
