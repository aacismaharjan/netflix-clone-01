import axios from 'axios';
import { Dispatch } from 'react';
import { genreData } from '../../data/genreData';
import {
  GET_MOVIES_BY_GENRE_ERROR,
  GET_MOVIES_BY_GENRE_ID_ERROR,
  GET_MOVIES_BY_GENRE_ID_LOADING,
  GET_MOVIES_BY_GENRE_ID_SUCCESS,
  GET_MOVIES_BY_GENRE_LOADING,
  GET_MOVIES_BY_GENRE_SUCCESS,
  MoviesByGenreDispatchTypes,
} from './genreTypes';

export const GetMoviesByGenre = () => {
  return async (dispatch: Dispatch<MoviesByGenreDispatchTypes>) => {
    dispatch({ type: GET_MOVIES_BY_GENRE_LOADING });

    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );

      dispatch({ type: GET_MOVIES_BY_GENRE_SUCCESS, payload: genreData });
    } catch (error) {
      dispatch({ type: GET_MOVIES_BY_GENRE_ERROR });
    }
  };
};

export const GetMoviesByGenreId = (genreId: number) => {
  return async (dispatch: Dispatch<MoviesByGenreDispatchTypes>) => {
    dispatch({ type: GET_MOVIES_BY_GENRE_ID_LOADING });

    try {
      const data = genreData.find((genre) => genre.id === genreId);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${genreId}`
      );

      if (data) {
        dispatch({
          type: GET_MOVIES_BY_GENRE_ID_SUCCESS,
          payload: data,
        });
      } else {
        dispatch({ type: GET_MOVIES_BY_GENRE_ID_ERROR });
      }
    } catch (error) {
      dispatch({ type: GET_MOVIES_BY_GENRE_ID_ERROR });
    }
  };
};
