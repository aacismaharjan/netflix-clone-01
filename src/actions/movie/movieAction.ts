import axios from 'axios';
import { Dispatch } from 'react';
import { watchlistData } from '../../data/watchlistData';
import {
  GET_MOVIE_ERROR,
  GET_MOVIE_LOADING,
  GET_MOVIE_SUCCESS,
  AllWatchlistDispatchTypes,
  GET_RELATED_MOVIES_LOADING,
  GET_RELATED_MOVIES_SUCCESS,
  GET_RELATED_MOVIES_ERROR,
} from './movieTypes';

export const GetMovie = (movieId: number) => {
  return async (dispatch: Dispatch<AllWatchlistDispatchTypes>) => {
    dispatch({ type: GET_MOVIE_LOADING });
    try {
      const data = watchlistData.find((watchlist) => watchlist.id === movieId);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${movieId}`
      );

      if (data) {
        dispatch({ type: GET_MOVIE_SUCCESS, payload: data });
      } else {
        dispatch({ type: GET_MOVIE_ERROR });
      }
    } catch (error) {
      dispatch({ type: GET_MOVIE_ERROR });
    }
  };
};

export const GetRelatedMovies = (movieId: number) => {
  return async (dispatch: Dispatch<AllWatchlistDispatchTypes>) => {
    dispatch({ type: GET_RELATED_MOVIES_LOADING });

    try {
      const data = watchlistData.find((watchlist) => watchlist.id === movieId);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${movieId}`
      );

      if (data) {
        dispatch({ type: GET_RELATED_MOVIES_SUCCESS, payload: watchlistData });
      } else {
        dispatch({ type: GET_RELATED_MOVIES_ERROR });
      }
    } catch (error) {
      dispatch({ type: GET_RELATED_MOVIES_ERROR });
    }
  };
};
