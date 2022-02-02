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

const Detail = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState<any>(null);
  const [isAddedToWatchList, setIsAddedToWatchList] = useState(false);
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [error, setError] = useState(false);

  const movieSelector = useSelector((state: RootStore) => state.movie);

  useEffect(() => {
    if (params && params.id) {
      dispatch(GetMovie(parseInt(params.id)));
      dispatch(GetRelatedMovies(parseInt(params.id)));
    }
  }, [dispatch, params]);

  useEffect(() => {
    setLoading(movieSelector.loading);
    setMovie(movieSelector.item);
    setRelatedMovies(movieSelector.items);
    setError(movieSelector.error);
  }, [movieSelector]);

  const getDescription = (text: string) => {
    return text.split(' ').slice(0, 25).join(' ');
  };

  const handleToggleWatchList = () => {
    setIsAddedToWatchList((isAdded) => !isAdded);
  };

  if (error) {
    return <span>Something went wrong!</span>;
  }

  if (loading || movie === null) {
    return <span>Loading...</span>;
  }

  return (
    <React.Fragment>
      <Movie>
        <Movie.Image src={movie.poster_path} alt={movie.title} />

        <Movie.Content>
          <Container>
            <Movie.Header>
              <IconButton aria-label="back" color="inherit" size="large">
                <ArrowBackIcon fontSize="inherit" />
              </IconButton>
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

          <Genre.Grid container spacing={2}>
            {relatedMovies.map((item: any) => {
              return (
                <Genre.Grid item key={item.id}>
                  <Card>
                    <Card.Link href={`/movies/${item.id}`}>
                      <Card.Image src={item.poster_path} alt={item.title} />
                    </Card.Link>

                    <Card.Content>
                      <Card.Header>{item.title}</Card.Header>
                      <Card.Body>{getDescription(item.description)}</Card.Body>
                    </Card.Content>
                  </Card>
                </Genre.Grid>
              );
            })}
          </Genre.Grid>
        </Genre>
      </Container>
    </React.Fragment>
  );
};

export default Detail;