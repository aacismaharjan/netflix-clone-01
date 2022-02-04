export const GET_ALL_WATCHLIST_LOADING = 'GET_ALL_WATCHLIST_LOADING';
export const GET_ALL_WATCHLIST_SUCCESS = 'GET_ALL_WATCHLIST_SUCCESS';
export const GET_ALL_WATCHLIST_ERROR = 'GET_ALL_WATCHLIST_ERROR';

export const ADD_TO_WATCHLIST_LOADING = 'ADD_TO_WATCHLIST_LOADING';
export const ADD_TO_WATCHLIST_SUCCESS = 'ADD_TO_WATCHLIST_SUCCESS';
export const ADD_TO_WATCHLIST_ERROR = 'ADD_TO_WATCHLIST_ERROR';

export const REMOVE_FROM_WATCHLIST_LOADING = 'REMOVE_FROM_WATCHLIST_LOADING';
export const REMOVE_FROM_WATCHLIST_SUCCESS = 'REMOVE_FROM_WATCHLIST_SUCCESS';
export const REMOVE_FROM_WATCHLIST_ERROR = 'REMOVE_FROM_WATCHLIST_ERROR';

// Get All Watchlist
type getAllWatchlistLoading = {
  type: typeof GET_ALL_WATCHLIST_LOADING;
};

type getAllWatchlistSuccess = {
  type: typeof GET_ALL_WATCHLIST_SUCCESS;
  payload: any;
};

type getAllWatchlistError = {
  type: typeof GET_ALL_WATCHLIST_ERROR;
};

// Add to watchlist
type addToWatchlistLoading = {
  type: typeof ADD_TO_WATCHLIST_LOADING;
};

type addToWatchlistSuccess = {
  type: typeof ADD_TO_WATCHLIST_SUCCESS;
  payload: any;
};

type addToWatchlistError = {
  type: typeof ADD_TO_WATCHLIST_ERROR;
};

// Remove from watchlist
type removeFromWatchlistLoading = {
  type: typeof REMOVE_FROM_WATCHLIST_LOADING;
};

type removeFromWatchlistSuccess = {
  type: typeof REMOVE_FROM_WATCHLIST_SUCCESS;
  payload: any;
};

type removeFromWatchlistError = {
  type: typeof REMOVE_FROM_WATCHLIST_ERROR;
};

export type AllWatchlistDispatchTypes =
  | getAllWatchlistLoading
  | getAllWatchlistSuccess
  | getAllWatchlistError
  | addToWatchlistLoading
  | addToWatchlistSuccess
  | addToWatchlistError
  | removeFromWatchlistLoading
  | removeFromWatchlistSuccess
  | removeFromWatchlistError;
