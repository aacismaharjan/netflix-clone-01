import { useEffect, useState } from 'react';
import { CircularProgress, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { GetMoviesByGenre } from '../actions/genre/genreAction';
import Card from '../components/card';
import Genre from '../components/genre';
import { RootStore } from '../store';
import Layout from '../core-ui/layout';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { movieResponsive } from '../helpers/Utils';
import MoviesLoading, { MoviesFailed } from '../core-ui/progress';

const Dashboard = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(false);

  const genreSelector = useSelector((state: RootStore) => state.genre);

  useEffect(() => {
    // dispatch(GetMoviesByGenre());
  }, [dispatch]);

  useEffect(() => {
    setLoading(genreSelector.loading);
    setGenres(genreSelector.items);
    setError(genreSelector.error);
  }, [genreSelector]);

  const getDescription = (text: string) => {
    return text.split(' ').slice(0, 18).join(' '); // Show only first 18 words
  };

  return (
    <Layout>
      <Container>
        {error && <MoviesFailed />}
        {loading && <MoviesLoading />}
        {genres.map((genre: any) => {
          return (
            <Genre key={genre.id}>
              <Genre.Header>
                <Genre.Title variant="h4">
                  <Genre.Link to={`/genre/${genre.id}`}>
                    {genre.name}
                  </Genre.Link>
                </Genre.Title>
              </Genre.Header>

              <Carousel responsive={movieResponsive}>
                {genre.items.map((item: any) => {
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
          );
        })}
      </Container>
    </Layout>
  );
};

export default Dashboard;
