import {
  GET_LOGIN_ERROR,
  GET_LOGIN_LOADING,
  GET_LOGIN_SUCCESS,
  GET_LOGOUT_ERROR,
  GET_LOGOUT_LOADING,
  GET_LOGOUT_SUCCESS,
  GET_SIGNUP_ERROR,
  GET_SIGNUP_LOADING,
  GET_SIGNUP_SUCCESS,
} from '../actions/auth/authTypes';

interface InitialStateI {
  loading: boolean;
  authenticated: boolean;
  user: any;
  error: boolean;
}

const initialState: InitialStateI = {
  loading: false,
  authenticated: false,
  user: null,
  error: false,
};

const GenreReducer = (
  state: InitialStateI = initialState,
  action: any
): InitialStateI => {
  switch (action.type) {
    case GET_LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: true,
        user: action.payload,
        error: false,
      };
    case GET_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        authenticated: false,
        user: null,
        error: true,
      };
    case GET_SIGNUP_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: true,
        user: action.payload,
        error: false,
      };
    case GET_SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        authenticated: false,
        user: null,
        error: true,
      };
    case GET_LOGOUT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: false,
        user: null,
        error: false,
      };
    case GET_LOGOUT_ERROR:
      return {
        ...state,
        loading: false,
        authenticated: false,
        user: null,
        error: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default GenreReducer;
