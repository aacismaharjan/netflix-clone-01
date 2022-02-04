import {
  ADD_TO_WATCHLIST_ERROR,
  ADD_TO_WATCHLIST_LOADING,
  ADD_TO_WATCHLIST_SUCCESS,
  GET_ALL_WATCHLIST_ERROR,
  GET_ALL_WATCHLIST_LOADING,
  GET_ALL_WATCHLIST_SUCCESS,
  REMOVE_FROM_WATCHLIST_ERROR,
  REMOVE_FROM_WATCHLIST_LOADING,
  REMOVE_FROM_WATCHLIST_SUCCESS,
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
    case ADD_TO_WATCHLIST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_TO_WATCHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload],
        error: false,
      };
    case ADD_TO_WATCHLIST_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case REMOVE_FROM_WATCHLIST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_FROM_WATCHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        items: state.items.filter((item: any) => item.id !== action.payload),
        error: false,
      };
    case REMOVE_FROM_WATCHLIST_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default WatchListReducer;
