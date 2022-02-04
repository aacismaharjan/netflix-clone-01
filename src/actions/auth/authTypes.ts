export const GET_LOGIN_LOADING = 'GET_LOGIN_LOADING';
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';
export const GET_LOGIN_ERROR = 'GET_LOGIN_ERROR';

export const GET_SIGNUP_LOADING = 'GET_SIGNUP_LOADING';
export const GET_SIGNUP_SUCCESS = 'GET_SIGNUP_SUCCESS';
export const GET_SIGNUP_ERROR = 'GET_SIGNUP_ERROR';

export const GET_LOGOUT_LOADING = 'GET_LOGOUT_LOADING';
export const GET_LOGOUT_SUCCESS = 'GET_LOGOUT_SUCCESS';
export const GET_LOGOUT_ERROR = 'GET_LOGOUT_ERROR';

// Get Login in the app
type getLoginLoading = {
  type: typeof GET_LOGIN_LOADING;
};

type getLoginSuccess = {
  type: typeof GET_LOGIN_SUCCESS;
  payload: any;
};

type getLoginError = {
  type: typeof GET_LOGIN_ERROR;
  payload: any;
};

// Get Logout from the app
type getLogoutLoading = {
  type: typeof GET_LOGOUT_LOADING;
};

type getLogoutSuccess = {
  type: typeof GET_LOGOUT_SUCCESS;
};

type getLogoutError = {
  type: typeof GET_LOGOUT_ERROR;
};

// Get Signup to the app
type getSignupLoading = {
  type: typeof GET_SIGNUP_LOADING;
};

type getSignupSuccess = {
  type: typeof GET_SIGNUP_SUCCESS;
  payload: any;
};

type getSignupError = {
  type: typeof GET_SIGNUP_ERROR;
};

export type AuthDispatchTypes =
  | getLoginLoading
  | getLoginSuccess
  | getLoginError
  | getLogoutLoading
  | getLogoutSuccess
  | getLogoutError
  | getSignupLoading
  | getSignupSuccess
  | getSignupError;
