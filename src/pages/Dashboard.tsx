import React, { useEffect, useState } from 'react';
import { Grid, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { GetMoviesByGenre } from '../actions/genre/genreAction';
import Card from '../components/card';
import Genre from '../components/genre';
import { RootStore } from '../store';
import ResponsiveAppBar from '../core-ui/header';
import Layout from '../core-ui/layout';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(false);

  const genreSelector = useSelector((state: RootStore) => state.genre);

  useEffect(() => {
    dispatch(GetMoviesByGenre());
  }, [dispatch]);

  useEffect(() => {
    setLoading(genreSelector.loading);
    setGenres(genreSelector.items);
    setError(genreSelector.error);
  }, [genreSelector]);

  const getDescription = (text: string) => {
    return text.split(' ').slice(0, 25).join(' ');
  };

  if (loading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Something went wrong!</span>;
  }

  return (
    <Layout>
      <Container>
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

              <Genre.Grid container spacing={2}>
                {genre.items.map((item: any) => {
                  return (
                    <Genre.Grid item key={item.id}>
                      <Card.Link component={Link} to={`/movies/${item.id}`}>
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
                    </Genre.Grid>
                  );
                })}
              </Genre.Grid>
            </Genre>
          );
        })}
      </Container>
    </Layout>
  );
};

export default Dashboard;
