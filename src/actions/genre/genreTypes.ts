export const GET_MOVIES_BY_GENRE_LOADING = 'GET_MOVIES_BY_GENRE_LOADING';
export const GET_MOVIES_BY_GENRE_SUCCESS = 'GET_MOVIES_BY_GENRE_SUCCESS';
export const GET_MOVIES_BY_GENRE_ERROR = 'GET_MOVIES_BY_GENRE_ERROR';

export const GET_MOVIES_BY_GENRE_ID_LOADING = 'GET_MOVIES_BY_GENRE_ID_LOADING';
export const GET_MOVIES_BY_GENRE_ID_SUCCESS = 'GET_MOVIES_BY_GENRE_ID_SUCCESS';
export const GET_MOVIES_BY_GENRE_ID_ERROR = 'GET_MOVIES_BY_GENRE_ID_ERROR';

// Get Movies by Genres
type getMoviesByGenreLoading = {
  type: typeof GET_MOVIES_BY_GENRE_LOADING;
};

type getMoviesByGenreSuccess = {
  type: typeof GET_MOVIES_BY_GENRE_SUCCESS;
  payload: any;
};

type getMoviesByGenreError = {
  type: typeof GET_MOVIES_BY_GENRE_ERROR;
};

// Get Movies by Genre ID
type getMoviesByGenreIdLoading = {
  type: typeof GET_MOVIES_BY_GENRE_ID_LOADING;
};

type getMoviesByGenreIdSuccess = {
  type: typeof GET_MOVIES_BY_GENRE_ID_SUCCESS;
  payload: any;
};

type getMoviesByGenreIdError = {
  type: typeof GET_MOVIES_BY_GENRE_ID_ERROR;
};

export type MoviesByGenreDispatchTypes =
  | getMoviesByGenreLoading
  | getMoviesByGenreSuccess
  | getMoviesByGenreError
  | getMoviesByGenreIdLoading
  | getMoviesByGenreIdSuccess
  | getMoviesByGenreIdError;
