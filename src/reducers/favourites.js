import { TOGGLE_FAVOURITE_TYPE, FETCH_FAVOURITES_TYPE } from '../actions';

const initialState = [];

export default (favourites = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE_TYPE:
      favourites.push(action.payload.entityId);
      return [...favourites];

    case FETCH_FAVOURITES_TYPE:
      return [
        ...favourites
      ];

    default:
      return favourites;
  }
};
