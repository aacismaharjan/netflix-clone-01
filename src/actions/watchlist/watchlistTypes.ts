export const GET_ALL_WATCHLIST_LOADING = 'GET_ALL_WATCHLIST_LOADING';
export const GET_ALL_WATCHLIST_SUCCESS = 'GET_ALL_WATCHLIST_SUCCESS';
export const GET_ALL_WATCHLIST_ERROR = 'GET_ALL_WATCHLIST_ERROR';

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

export type AllWatchlistDispatchTypes =
  | getAllWatchlistLoading
  | getAllWatchlistSuccess
  | getAllWatchlistError;
