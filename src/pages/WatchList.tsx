import React, { useState, useEffect } from 'react';
import {
  Grid,
  Container,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import Card from '../components/card';
import Genre from '../components/genre';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllWatchlist } from '../actions/watchlist/watchlistAction';
import { RootStore } from '../store';
import Layout from '../core-ui/layout';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Fuse from 'fuse.js';
import { arrangeMovies } from '../helpers/Utils';

const WatchList = () => {
  const dispatch = useDispatch();
  const { register, watch } = useForm();

  const [loading, setLoading] = useState(false);
  const [watchList, setWatchList] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState<any>([]);
  const [error, setError] = useState(false);

  const user = useSelector((state: RootStore) => state.auth.user);
  const watchListSelector = useSelector((state: RootStore) => state.watchlist);
  const searchTerm = watch('search');
  const sortBy = watch('sortBy');

  useEffect(() => {
    // dispatch(GetAllWatchlist(user.id));
  }, [dispatch, user]);

  useEffect(() => {
    setLoading(watchListSelector.loading);
    setWatchList(watchListSelector.items);
    setFilteredMovies(watchListSelector.items);
    setError(watchListSelector.error);
  }, [watchListSelector]);

  useEffect(() => {
    if ((searchTerm !== undefined || sortBy !== undefined) && watchList) {
      const fuse = new Fuse(watchList, { keys: ['title'] });
      const results = fuse.search(searchTerm).map(({ item }) => item);

      if (watchList.length > 0 && searchTerm.length > 2) {
        setFilteredMovies(results);
      } else {
        setFilteredMovies(watchList);
      }
    }
  }, [searchTerm, watchList, sortBy]);

  const getDescription = (text: string) => {
    return text.split(' ').slice(0, 18).join(' ');
  };

  if (error) {
    return <span>Something went wrong!</span>;
  }

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <Layout>
      <Container>
        <Genre>
          <Genre.Header>
            <Genre.Title variant="h4">Your Watchlist</Genre.Title>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Search"
                  variant="outlined"
                  fullWidth
                  {...register('search')}
                />
              </Grid>

              <Grid item xs={6}>
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
    </Layout>
  );
};

export default WatchList;
