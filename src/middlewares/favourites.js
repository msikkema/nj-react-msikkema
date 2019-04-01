import { fetchFavourites } from '../services/favouritesService';
import { REHYDRATED, fetchFavouritesActionCreator } from '../actions';
import { getFavouritesApiUrl } from '../selectors';

export default store => next => action => {
  const ret = next(action);

  if (action.type === REHYDRATED) {
    const state = store.getState();
    const apiUrl = getFavouritesApiUrl(state);
    store.dispatch(fetchFavouritesActionCreator(fetchFavourites(apiUrl)));
  }

  return ret;
};
