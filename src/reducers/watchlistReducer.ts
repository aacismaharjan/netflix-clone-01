import {
  GET_ALL_WATCHLIST_ERROR,
  GET_ALL_WATCHLIST_LOADING,
  GET_ALL_WATCHLIST_SUCCESS,
} from '../actions/watchlist/watchlistTypes';

interface InitialStateI {
  loading: boolean;
  items: any;
  error: boolean;
}

const initialState: InitialStateI = {
  loading: false,
  items: [],
  error: false,
};

const WatchListReducer = (
  state: InitialStateI = initialState,
  action: any
): InitialStateI => {
  switch (action.type) {
    case GET_ALL_WATCHLIST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_WATCHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: false,
      };
    case GET_ALL_WATCHLIST_ERROR:
      return {
        ...state,
        loading: false,
        items: [],
        error: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default WatchListReducer;
