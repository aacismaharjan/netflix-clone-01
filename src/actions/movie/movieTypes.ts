export const GET_MOVIE_LOADING = 'GET_MOVIE_LOADING';
export const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';
export const GET_MOVIE_ERROR = 'GET_MOVIE_ERROR';

export const GET_RELATED_MOVIES_LOADING = 'GET_RELATED_MOVIES_LOADING';
export const GET_RELATED_MOVIES_SUCCESS = 'GET_RELATED_MOVIES_SUCCESS';
export const GET_RELATED_MOVIES_ERROR = 'GET_RELATED_MOVIES_ERROR';

// Get a Movie
type getMovieLoading = {
  type: typeof GET_MOVIE_LOADING;
};

type getMovieSuccess = {
  type: typeof GET_MOVIE_SUCCESS;
  payload: any;
};

type getMovieError = {
  type: typeof GET_MOVIE_ERROR;
};

// Get a related movie
type getRelatedMoviesLoading = {
  type: typeof GET_RELATED_MOVIES_LOADING;
};

type getRelatedMoviesSuccess = {
  type: typeof GET_RELATED_MOVIES_SUCCESS;
  payload: any;
};

type getRelatedMoviesError = {
  type: typeof GET_RELATED_MOVIES_ERROR;
};

export type AllWatchlistDispatchTypes =
  | getMovieLoading
  | getMovieSuccess
  | getMovieError
  | getRelatedMoviesLoading
  | getRelatedMoviesSuccess
  | getRelatedMoviesError;
