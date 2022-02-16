import { Dispatch } from 'react';
import {
  GET_MOVIES_BY_GENRE_ERROR,
  GET_MOVIES_BY_GENRE_ID_ERROR,
  GET_MOVIES_BY_GENRE_ID_LOADING,
  GET_MOVIES_BY_GENRE_ID_SUCCESS,
  GET_MOVIES_BY_GENRE_LOADING,
  GET_MOVIES_BY_GENRE_SUCCESS,
  MoviesByGenreDispatchTypes,
} from './genreTypes';
import firebase from '../../constants/firebase';
import { formatMovie } from '../../helpers/Utils';
import { storeData } from '../../data/storeData';

export const GetMoviesByGenre = () => {
  return async (dispatch: Dispatch<MoviesByGenreDispatchTypes>) => {
    dispatch({ type: GET_MOVIES_BY_GENRE_LOADING });

    try {
      firebase
        .firestore()
        .collection('movies')
        .get()
        .then((querySnapshots: any) => {
          let allContents: any = [];
          let tempGenreData: any = [];

          querySnapshots.forEach((snapshot: any) => {
            allContents = [
              ...allContents,
              { id: snapshot.id, ...snapshot.data() },
            ];
          });

          tempGenreData = Array.from(
            new Set(
              allContents.reduce((total: any, current: any) => {
                const temp = [...current.genres];
                total = [...total, ...temp];
                return total;
              }, [])
            )
          );

          tempGenreData = tempGenreData.map((item: string, index: number) => {
            const type = item.toString().toLowerCase().split(' ').join('');
            const tempItems = allContents.filter((content: any) =>
              content.genres.includes(item)
            );

            return {
              id: type,
              type,
              name: item,
              items: tempItems.map((content: any) => formatMovie(content)),
            };
          });
          return tempGenreData;
        })
        .then((data: any) => {
          dispatch({ type: GET_MOVIES_BY_GENRE_SUCCESS, payload: data });
        })
        .catch((error) => {
          throw new Error(error);
        });

      // Works offline
      // dispatch({
      //   type: GET_MOVIES_BY_GENRE_SUCCESS,
      //   payload: storeData.genre.items,
      // });
    } catch (error) {
      dispatch({ type: GET_MOVIES_BY_GENRE_ERROR });
    }
  };
};

export const GetMoviesByGenreId = (genreId: string) => {
  return async (dispatch: Dispatch<MoviesByGenreDispatchTypes>) => {
    dispatch({ type: GET_MOVIES_BY_GENRE_ID_LOADING });

    try {
      dispatch({
        type: GET_MOVIES_BY_GENRE_ID_SUCCESS,
        payload: genreId,
      });
    } catch (error) {
      dispatch({ type: GET_MOVIES_BY_GENRE_ID_ERROR });
    }
  };
};
