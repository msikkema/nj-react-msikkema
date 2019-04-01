/**
 * This service handles functionality regarding favourites
 * persistence for the client session
 */
import get from 'lodash/get';

export const fetchFavourites = async apiUrl => {
  const response = await fetch(apiUrl, {
    headers: { Accept: 'application/json' }
  });

  const data = await response.json();
  const favourites = get(data, 'results.favourties');

  if (!response.ok || !data.success || !favourites) {
    const error = new Error(
      get(data, 'results.favourties') || 'Failed to fetch favourites'
    );
    error.status = response.status;
    throw error;
  }

  return favourites;
};

export const persistFavourite = async (apiUrl, id) => {
  return await fetch(apiUrl, {
    method: 'PUT',
    headers: { Accept: 'application/json' },
    body: id
  });
};
