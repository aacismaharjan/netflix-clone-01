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

const WatchList = () => {
  const dispatch = useDispatch();

  const [age, setAge] = React.useState('');
  const [loading, setLoading] = useState(false);
  const [watchList, setWatchList] = useState([]);
  const [error, setError] = useState(false);

  const watchListSelector = useSelector((state: RootStore) => state.watchlist);

  useEffect(() => {
    dispatch(GetAllWatchlist());
  }, [dispatch]);

  useEffect(() => {
    setLoading(watchListSelector.loading);
    setWatchList(watchListSelector.items);
    setError(watchListSelector.error);
  }, [watchListSelector]);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const getDescription = (text: string) => {
    return text.split(' ').slice(0, 25).join(' ');
  };

  if (error) {
    return <span>Something went wrong!</span>;
  }

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <React.Fragment>
      <Container>
        <Genre>
          <Genre.Header>
            <Genre.Title variant="h4">Your Watchlist</Genre.Title>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Search"
                  name="search"
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Sort by year
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    value={age}
                    label="Sort by year"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Sort by Ascending</MenuItem>
                    <MenuItem value={20}>Sort by Descending</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Genre.Header>

          <Genre.Grid container spacing={2}>
            {watchList.map((item: any) => {
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

export default WatchList;
