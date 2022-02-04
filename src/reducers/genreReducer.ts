import {
  GET_MOVIES_BY_GENRE_ERROR,
  GET_MOVIES_BY_GENRE_ID_ERROR,
  GET_MOVIES_BY_GENRE_ID_LOADING,
  GET_MOVIES_BY_GENRE_ID_SUCCESS,
  GET_MOVIES_BY_GENRE_LOADING,
  GET_MOVIES_BY_GENRE_SUCCESS,
} from '../actions/genre/genreTypes';

interface InitialStateI {
  loading: boolean;
  items: any;
  item: any;
  error: boolean;
}

const initialState: InitialStateI = {
  loading: false,
  items: [],
  item: null,
  error: false,
};

const GenreReducer = (
  state: InitialStateI = initialState,
  action: any
): InitialStateI => {
  switch (action.type) {
    case GET_MOVIES_BY_GENRE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_BY_GENRE_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: false,
      };
    case GET_MOVIES_BY_GENRE_ERROR:
      return {
        ...state,
        loading: false,
        items: [],
        error: true,
      };
    case GET_MOVIES_BY_GENRE_ID_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_BY_GENRE_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        item:
          state.items.find((item: any) => item.id === action.payload) || null,
        error: false,
      };
    case GET_MOVIES_BY_GENRE_ID_ERROR:
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

export default GenreReducer;
