import React, { useState, useEffect } from 'react';
import {
  Grid,
  Container,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import Card from '../components/card';
import Genre from '../components/genre';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { GetMoviesByGenreId } from '../actions/genre/genreAction';
import { RootStore } from '../store';
import Layout from '../core-ui/layout';
import { Link } from 'react-router-dom';
import Fuse from 'fuse.js';
import { useForm } from 'react-hook-form';
import { arrangeMovies } from '../helpers/Utils';
import MoviesLoading, { MoviesFailed } from '../core-ui/progress';

const GenrePage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { register, watch } = useForm();

  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState<any>(null);
  const [filteredMovies, setFilteredMovies] = useState<any>([]);
  const [error, setError] = useState(false);

  const genreSelector = useSelector((state: RootStore) => state.genre);
  const searchTerm = watch('search');
  const sortBy = watch('sortBy');

  useEffect(() => {
    if (params.id) dispatch(GetMoviesByGenreId(params.id));
  }, [dispatch, params.id, genreSelector.items]);

  useEffect(() => {
    setLoading(genreSelector.loading);
    setGenre(genreSelector.item);
    setError(genreSelector.error);
  }, [genreSelector]);

  useEffect(() => {
    if (genre) setFilteredMovies(genre.items);
  }, [genre]);

  useEffect(() => {
    if ((searchTerm !== undefined || sortBy !== undefined) && genre) {
      let items = genre.items;
      const fuse = new Fuse(items, { keys: ['title'] });
      const results = fuse.search(searchTerm).map(({ item }) => item);

      if (items.length > 0 && searchTerm.length > 2) {
        setFilteredMovies(results);
      } else {
        setFilteredMovies(genre.items);
      }
    }
  }, [searchTerm, genre, sortBy]);

  const getDescription = (text: string) => {
    return text.split(' ').slice(0, 18).join(' ');
  };

  return (
    <Layout>
      {error && <MoviesFailed />}
      {(loading || genre === null) && <MoviesLoading />}

      {!loading && !error && genre && (
        <Container>
          <Genre>
            <Genre.Header hasSearch>
              <Genre.Title variant="h4">{genre.name}</Genre.Title>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    label="Search"
                    variant="outlined"
                    fullWidth
                    {...register('search')}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Sort by year</InputLabel>
                    <Select label="Sort by year" {...register('sortBy')}>
                      <MenuItem value={'asc'}>Sort by Ascending</MenuItem>
                      <MenuItem value={'desc'}>Sort by Descending</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Genre.Header>

            <Genre.Grid container spacing={2}>
              {filteredMovies
                .sort((a: any, b: any) => arrangeMovies(a, b, sortBy))
                .map((item: any) => {
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
        </Container>
      )}
    </Layout>
  );
};

export default GenrePage;
