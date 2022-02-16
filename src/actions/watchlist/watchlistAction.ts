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
      firebase
        .firestore()
        .collection('watchlist')
        .doc(userId)
        .get()
        .then(async (snapshot: any) => {
          if (snapshot.exists) {
            const watchlist = [];
            let items: any = [];

            for (let movieId in snapshot.data()) {
              if (snapshot.data()[movieId]) {
                watchlist.push(movieId);
              }
            }

            await Promise.all(
              watchlist.map(async (item) => {
                await firebase
                  .firestore()
                  .collection('movies')
                  .doc(item)
                  .get()
                  .then((snapshot) => {
                    if (snapshot.exists) {
                      const item = { id: snapshot.id, ...snapshot.data() };
                      items.push(item);
                    }
                  });

                return item;
              })
            );

            dispatch({
              type: GET_ALL_WATCHLIST_SUCCESS,
              payload: items.map((item: any) => formatMovie(item)),
            });
          } else {
            dispatch({
              type: GET_ALL_WATCHLIST_SUCCESS,
              payload: [],
            });
          }
        })
        .catch((err: any) => dispatch({ type: GET_ALL_WATCHLIST_ERROR }));
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
        .get()
        .then((snapshot) => {
          if (snapshot.exists) {
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
                        payload: formatMovie({
                          id: snapshot.id,
                          ...snapshot.data(),
                        }),
                      });
                    }
                  });
              })
              .catch((error) => {
                console.log('Error', error);
              });
          } else {
            firebase
              .firestore()
              .collection('watchlist')
              .doc(userId)
              .set({
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
                        payload: formatMovie({
                          id: snapshot.id,
                          ...snapshot.data(),
                        }),
                      });
                    }
                  });
              })
              .catch((error) => {
                console.log('Error', error);
              });
          }
        });
    } catch (error) {
      dispatch({ type: ADD_TO_WATCHLIST_ERROR });
    }
  };
};

export const RemoveFromWatchlist = (userId: string, movieId: any) => {
  return async (dispatch: Dispatch<AllWatchlistDispatchTypes>) => {
    dispatch({ type: REMOVE_FROM_WATCHLIST_LOADING });

    try {
      firebase
        .firestore()
        .collection('watchlist')
        .doc(userId)
        .get()
        .then((snapshot) => {
          if (snapshot.exists) {
            firebase
              .firestore()
              .collection('watchlist')
              .doc(userId)
              .update({
                [movieId]: false,
              })
              .then(() => {
                firebase
                  .firestore()
                  .collection('movies')
                  .doc(movieId)
                  .get()
                  .then((snapshot: any) => {
                    if (snapshot.exists) {
                      dispatch({
                        type: REMOVE_FROM_WATCHLIST_SUCCESS,
                        payload: snapshot.id,
                      });
                    }
                  });
              })
              .catch((error) => {
                console.log('Error', error);
              });
          } else {
            firebase
              .firestore()
              .collection('watchlist')
              .doc(userId)
              .set({
                [movieId]: false,
              })
              .then(() => {
                firebase
                  .firestore()
                  .collection('movies')
                  .doc(movieId)
                  .get()
                  .then((snapshot: any) => {
                    if (snapshot.exists) {
                      dispatch({
                        type: REMOVE_FROM_WATCHLIST_SUCCESS,
                        payload: snapshot.id,
                      });
                    }
                  });
              })
              .catch((error) => {
                console.log('Error', error);
              });
          }
        });
    } catch (error) {
      dispatch({ type: REMOVE_FROM_WATCHLIST_ERROR });
    }
  };
};
