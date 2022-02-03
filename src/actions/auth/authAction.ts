import { Dispatch } from 'react';
import { genreData } from '../../data/genreData';
import {
  GET_LOGIN_ERROR,
  GET_LOGIN_LOADING,
  GET_LOGIN_SUCCESS,
  GET_LOGOUT_ERROR,
  GET_LOGOUT_LOADING,
  GET_LOGOUT_SUCCESS,
  AuthDispatchTypes,
} from './authTypes';

export const GetLogin = (credentials: any) => {
  return async (dispatch: Dispatch<AuthDispatchTypes>) => {
    dispatch({ type: GET_LOGIN_LOADING });

    try {
      dispatch({ type: GET_LOGIN_SUCCESS, payload: credentials });
    } catch (error) {
      dispatch({ type: GET_LOGIN_ERROR });
    }
  };
};

export const GetLogout = () => {
  return async (dispatch: Dispatch<AuthDispatchTypes>) => {
    dispatch({ type: GET_LOGOUT_LOADING });

    try {
      dispatch({ type: GET_LOGOUT_SUCCESS, payload: genreData });
    } catch (error) {
      dispatch({ type: GET_LOGOUT_ERROR });
    }
  };
};
