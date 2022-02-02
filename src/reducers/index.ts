import { combineReducers } from 'redux';
import GenreReducer from './genreReducer';
import WatchListReducer from './watchlistReducer';
import MovieReducer from './movieReducer';

const RootReducer = combineReducers({
  genre: GenreReducer,
  watchlist: WatchListReducer,
  movie: MovieReducer,
});

export default RootReducer;
