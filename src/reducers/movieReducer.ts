import {
  GET_MOVIE_ERROR,
  GET_MOVIE_LOADING,
  GET_MOVIE_SUCCESS,
  GET_RELATED_MOVIES_ERROR,
  GET_RELATED_MOVIES_LOADING,
  GET_RELATED_MOVIES_SUCCESS,
} from '../actions/movie/movieTypes';

interface InitialStateI {
  loading: boolean;
  item: any;
  items: any;
  error: boolean;
}

const initialState: InitialStateI = {
  loading: false,
  item: null,
  items: [],
  error: false,
};

const WatchListReducer = (
  state: InitialStateI = initialState,
  action: any
): InitialStateI => {
  switch (action.type) {
    case GET_MOVIE_LOADING:
      return {
        ...state,
        loading: true,
        item: null,
      };
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.payload,
        error: false,
      };
    case GET_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        item: null,
        error: true,
      };
    case GET_RELATED_MOVIES_LOADING:
      return {
        ...state,
        loading: true,
        items: [],
      };
    case GET_RELATED_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: false,
      };
    case GET_RELATED_MOVIES_ERROR:
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
