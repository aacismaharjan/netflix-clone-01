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
  GET_SIGNUP_LOADING,
  GET_SIGNUP_SUCCESS,
  GET_SIGNUP_ERROR,
} from './authTypes';
import firebase from '../../constants/firebase';

export const GetLogin = (credentials: any) => {
  return async (dispatch: Dispatch<AuthDispatchTypes>) => {
    dispatch({ type: GET_LOGIN_LOADING });

    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then((userCredential: any) => {
          dispatch({
            type: GET_LOGIN_SUCCESS,
            payload: {
              id: userCredential.user.uid,
              email: userCredential.user.email,
            },
          });
        })
        .catch((error: any) => {
          dispatch({ type: GET_LOGIN_ERROR, payload: error.message });
          throw new Error(error);
        });
    } catch (error: any) {
      dispatch({ type: GET_LOGIN_ERROR, payload: error.message });
    }
  };
};

export const GetSignup = (credentials: any) => {
  return async (dispatch: Dispatch<AuthDispatchTypes>) => {
    dispatch({ type: GET_SIGNUP_LOADING });

    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then((userCredential: any) => {
          dispatch({
            type: GET_SIGNUP_SUCCESS,
            payload: {
              id: userCredential.user.uid,
              email: userCredential.user.email,
            },
          });
        })
        .catch((error: any) => {
          dispatch({ type: GET_LOGIN_ERROR, payload: error.message });
          throw new Error(error);
        });
    } catch (error) {
      dispatch({ type: GET_SIGNUP_ERROR });
    }
  };
};

export const GetLogout = () => {
  return async (dispatch: Dispatch<AuthDispatchTypes>) => {
    dispatch({ type: GET_LOGOUT_LOADING });

    try {
      firebase
        .auth()
        .signOut()
        .then(() => {
          dispatch({ type: GET_LOGOUT_SUCCESS });
        });
    } catch (error) {
      dispatch({ type: GET_LOGOUT_ERROR });
    }
  };
};

export const VerifyUser = () => {
  return async (dispatch: Dispatch<AuthDispatchTypes>) => {
    dispatch({ type: GET_LOGIN_LOADING });

    try {
      firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          dispatch({
            type: GET_LOGIN_SUCCESS,
            payload: { id: authUser.uid, email: authUser.email },
          });
        } else {
          dispatch({ type: GET_LOGOUT_SUCCESS });
        }
      });
    } catch (error: any) {
      dispatch({ type: GET_LOGIN_ERROR, payload: error.message });
    }
  };
};
