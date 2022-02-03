import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import GenreReducer from './genreReducer';
import WatchListReducer from './watchlistReducer';
import MovieReducer from './movieReducer';

const RootReducer = combineReducers({
  auth: AuthReducer,
  genre: GenreReducer,
  watchlist: WatchListReducer,
  movie: MovieReducer,
});

export default RootReducer;
