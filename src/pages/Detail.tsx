import React, { useState, useEffect } from 'react';
import { Container, IconButton, Button } from '@mui/material';
import Card from '../components/card';
import Genre from '../components/genre';
import Movie from '../components/movie';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { GetMovie, GetRelatedMovies } from '../actions/movie/movieAction';
import { RootStore } from '../store';
import { useParams } from 'react-router';
import Layout from '../core-ui/layout';
import { Link, useNavigate } from 'react-router-dom';
import {
  AddToWatchlist,
  RemoveFromWatchlist,
} from '../actions/watchlist/watchlistAction';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { movieResponsive } from '../helpers/Utils';
import MoviesLoading, { MoviesFailed } from '../core-ui/progress';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Detail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState<any>(null);
  const [isAddedToWatchList, setIsAddedToWatchList] = useState(false);
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [error, setError] = useState(false);

  const user = useSelector((state: RootStore) => state.auth.user);
  const movieSelector = useSelector((state: RootStore) => state.movie);
  const watchListSelector = useSelector((state: RootStore) => state.watchlist);

  useEffect(() => {
    if (params && params.id) {
      dispatch(GetMovie(params.id));
    }
  }, [dispatch, params]);

  useEffect(() => {
    if (movie) dispatch(GetRelatedMovies(movie));
  }, [dispatch, movie]);

  useEffect(() => {
    setLoading(movieSelector.loading);
    setMovie(movieSelector.item);
    setRelatedMovies(movieSelector.items);
    setError(movieSelector.error);
  }, [movieSelector]);

  useEffect(() => {
    if (movie) {
      const check = (el: any) => el.id === movie.id;
      const isMatched = watchListSelector.items.some(check);
      setIsAddedToWatchList(isMatched);
    }
  }, [movie, watchListSelector.items]);

  const getDescription = (text: string) => {
    return text.split(' ').slice(0, 18).join(' ');
  };

  const handleToggleWatchList = () => {
    if (movie) {
      setIsAddedToWatchList((isAdded) => {
        if (!isAdded) {
          dispatch(AddToWatchlist(user.id, movie));
        } else {
          dispatch(RemoveFromWatchlist(user.id, movie.id));
        }
        return !isAdded;
      });
    }
  };

  const handleGoBack = () => {
    navigate(-1); // Goes 1 page back
  };

  return (
    <Layout>
      {error && <MoviesFailed />}
      {loading && <MoviesLoading />}

      {movie && relatedMovies.length > 0 && (
        <React.Fragment>
          <Movie>
            <Movie.Image src={movie.poster_path} alt={movie.title} />

            <Movie.Content>
              <Container>
                <Movie.Header>
                  <IconButton
                    color="inherit"
                    size="large"
                    onClick={handleGoBack}
                  >
                    <ArrowBackIcon fontSize="inherit" />
                  </IconButton>

                  {!isAddedToWatchList && (
                    <IconButton
                      color="inherit"
                      size="large"
                      onClick={handleToggleWatchList}
                      className="bookmark"
                    >
                      <BookmarkBorderOutlinedIcon fontSize="inherit" />
                    </IconButton>
                  )}

                  {isAddedToWatchList && (
                    <IconButton
                      color="inherit"
                      size="large"
                      onClick={handleToggleWatchList}
                      className="bookmark"
                    >
                      <BookmarkIcon fontSize="inherit" />
                    </IconButton>
                  )}
                </Movie.Header>

                <Movie.Footer>
                  <Movie.Title variant="h4">{movie.title}</Movie.Title>
                  {!isAddedToWatchList && (
                    <Button variant="contained" onClick={handleToggleWatchList}>
                      Add to Watchlist
                    </Button>
                  )}

                  {isAddedToWatchList && (
                    <Button variant="contained" onClick={handleToggleWatchList}>
                      Remove from Watchlist
                    </Button>
                  )}
                </Movie.Footer>
              </Container>
            </Movie.Content>
          </Movie>

          <Container>
            <Movie.Description>{movie.description}</Movie.Description>

            <Genre>
              <Genre.Header>
                <Genre.Title variant="h4">Related Movies</Genre.Title>
              </Genre.Header>

              <Carousel responsive={movieResponsive} centerMode={true}>
                {relatedMovies.map((item: any) => {
                  const id = item.id;
                  const path = `/movies/${id}`;

                  return (
                    <Card.Link key={id} component={Link} to={path}>
                      <Card>
                        <Card.Image src={item.poster_path} alt={item.title} />
                        <Card.Content>
                          <Card.Header>{item.title}</Card.Header>
                          <Card.Body>
                            {getDescription(item.description)}
                          </Card.Body>
                        </Card.Content>
                      </Card>
                    </Card.Link>
                  );
                })}
              </Carousel>
            </Genre>
          </Container>
        </React.Fragment>
      )}
    </Layout>
  );
};

export default Detail;
