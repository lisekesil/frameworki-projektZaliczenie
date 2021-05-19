import { ISinglePhoto } from '../entities/photos';
import * as actionTypes from '../actions/actionTypes/photoTypes';

export interface IPhotosReducer {
   photos: ISinglePhoto[];
}

const defaultState = (): IPhotosReducer => ({
   photos: [],
});

//eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
   switch (action.type) {
      case actionTypes.GET_PHOTOS: {
         const payload: actionTypes.IPhotoTypes['GET_PHOTOS'] = action;
         return {
            ...state,
            photos: payload.photos,
         };
      }
      default: {
         return state;
      }
   }
};
