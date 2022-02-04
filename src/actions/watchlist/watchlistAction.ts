import axios from 'axios';
import { Dispatch } from 'react';
import { watchlistData } from '../../data/watchlistData';
import {
  GET_ALL_WATCHLIST_ERROR,
  GET_ALL_WATCHLIST_LOADING,
  GET_ALL_WATCHLIST_SUCCESS,
  AllWatchlistDispatchTypes,
  ADD_TO_WATCHLIST_LOADING,
  ADD_TO_WATCHLIST_SUCCESS,
  ADD_TO_WATCHLIST_ERROR,
  REMOVE_FROM_WATCHLIST_LOADING,
  REMOVE_FROM_WATCHLIST_SUCCESS,
  REMOVE_FROM_WATCHLIST_ERROR,
} from './watchlistTypes';
import firebase from '../../constants/firebase';
import { formatMovie } from '../../helpers/Utils';
import { useSelector } from 'react-redux';
import { RootStore } from '../../store';

export const GetAllWatchlist = (userId: string) => {
  return async (dispatch: Dispatch<AllWatchlistDispatchTypes>) => {
    dispatch({ type: GET_ALL_WATCHLIST_LOADING });

    try {
      // firebase
      //   .firestore()
      //   .collection('watchlist')
      //   .doc(userId)
      //   .get()
      //   .then((querySnapshots: any) => {
      //     let allContents: any = [];
      //     querySnapshots.forEach((snapshot: any) => {
      //       allContents = [
      //         ...allContents,
      //         { id: snapshot.id, ...snapshot.data() },
      //       ];
      //     });
      //     console.log('allContents', allContents);
      //   });

      dispatch({ type: GET_ALL_WATCHLIST_SUCCESS, payload: [] });
    } catch (error) {
      dispatch({ type: GET_ALL_WATCHLIST_ERROR });
    }
  };
};

export const AddToWatchlist = (userId: string, movie: any) => {
  return async (dispatch: Dispatch<AllWatchlistDispatchTypes>) => {
    dispatch({ type: ADD_TO_WATCHLIST_LOADING });

    try {
      firebase
        .firestore()
        .collection('watchlist')
        .doc(userId)
        .update({
          [movie.id]: true,
        })
        .then(() => {
          firebase
            .firestore()
            .collection('movies')
            .doc(movie.id)
            .get()
            .then((snapshot: any) => {
              if (snapshot.exists) {
                dispatch({
                  type: ADD_TO_WATCHLIST_SUCCESS,
                  payload: formatMovie({ id: snapshot.id, ...snapshot.data() }),
                });
              }
            });
        })
        .catch((error) => {
          console.log('Error', error);
        });

      dispatch({
        type: ADD_TO_WATCHLIST_SUCCESS,
        payload: movie,
      });
    } catch (error) {
      dispatch({ type: ADD_TO_WATCHLIST_ERROR });
    }
  };
};

export const RemoveFromWatchlist = (userId: string, movieId: string) => {
  return async (dispatch: Dispatch<AllWatchlistDispatchTypes>) => {
    dispatch({ type: REMOVE_FROM_WATCHLIST_LOADING });

    try {
      // firebase
      //   .firestore()
      //   .collection('watchlist')
      //   .doc(userId)
      //   .update({
      //     [movieId]: false,
      //   })
      //   .then(() => {
      //     dispatch({
      //       type: REMOVE_FROM_WATCHLIST_SUCCESS,
      //       payload: movieId,
      //     });
      //   });

      dispatch({
        type: REMOVE_FROM_WATCHLIST_SUCCESS,
        payload: movieId,
      });
    } catch (error) {
      console.log('ERROR', error);
      dispatch({ type: REMOVE_FROM_WATCHLIST_ERROR });
    }
  };
};
