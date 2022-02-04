import { Dispatch } from 'react';
import firebase from '../../constants/firebase';
import { formatMovie } from '../../helpers/Utils';
import {
  GET_MOVIE_ERROR,
  GET_MOVIE_LOADING,
  GET_MOVIE_SUCCESS,
  AllWatchlistDispatchTypes,
  GET_RELATED_MOVIES_LOADING,
  GET_RELATED_MOVIES_SUCCESS,
  GET_RELATED_MOVIES_ERROR,
} from './movieTypes';

export const GetMovie = (movieId: string) => {
  return async (dispatch: Dispatch<AllWatchlistDispatchTypes>) => {
    dispatch({ type: GET_MOVIE_LOADING });
    try {
      firebase
        .firestore()
        .collection('movies')
        .doc(movieId)
        .get()
        .then((snapshot: any) => {
          if (snapshot.exists) {
            const movie = formatMovie({ ...snapshot.data(), id: snapshot.id });
            dispatch({ type: GET_MOVIE_SUCCESS, payload: movie });
          } else {
            dispatch({ type: GET_MOVIE_ERROR });
          }
        });
    } catch (error) {
      dispatch({ type: GET_MOVIE_ERROR });
    }
  };
};

export const GetRelatedMovies = (movie: any) => {
  return async (dispatch: Dispatch<AllWatchlistDispatchTypes>) => {
    dispatch({ type: GET_RELATED_MOVIES_LOADING });

    try {
      firebase
        .firestore()
        .collection('movies')
        .where('genres', 'array-contains-any', movie.genres)
        .limit(11)
        .get()
        .then((querySnapshots: any) => {
          let allContents: any = [];

          querySnapshots.forEach((snapshot: any) => {
            allContents = [
              ...allContents,
              formatMovie({ id: snapshot.id, ...snapshot.data() }),
            ];
          });

          dispatch({
            type: GET_RELATED_MOVIES_SUCCESS,
            payload: allContents
              .slice(0, 10)
              .filter((item: any) => item.id !== movie.id),
          });
        });
    } catch (error) {
      dispatch({ type: GET_RELATED_MOVIES_ERROR });
    }
  };
};
