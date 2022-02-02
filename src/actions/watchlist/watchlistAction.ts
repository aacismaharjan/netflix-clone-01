import axios from 'axios';
import { Dispatch } from 'react';
import { watchlistData } from '../../data/watchlistData';
import {
  GET_ALL_WATCHLIST_ERROR,
  GET_ALL_WATCHLIST_LOADING,
  GET_ALL_WATCHLIST_SUCCESS,
  AllWatchlistDispatchTypes,
} from './watchlistTypes';

export const GetAllWatchlist = () => {
  return async (dispatch: Dispatch<AllWatchlistDispatchTypes>) => {
    dispatch({ type: GET_ALL_WATCHLIST_LOADING });

    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );

      dispatch({ type: GET_ALL_WATCHLIST_SUCCESS, payload: watchlistData });
    } catch (error) {
      dispatch({ type: GET_ALL_WATCHLIST_ERROR });
    }
  };
};
