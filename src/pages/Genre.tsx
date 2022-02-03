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
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { GetMoviesByGenreId } from '../actions/genre/genreAction';
import { RootStore } from '../store';
import Layout from '../core-ui/layout';

const GenrePage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [age, setAge] = useState('');
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState<any>(null);
  const [error, setError] = useState(false);

  const genreSelector = useSelector((state: RootStore) => state.genre);

  useEffect(() => {
    if (params && params.id) {
      dispatch(GetMoviesByGenreId(parseInt(params.id)));
    }
  }, [params, dispatch]);

  useEffect(() => {
    setLoading(genreSelector.loading);
    setGenre(genreSelector.item);
    setError(genreSelector.error);
  }, [genreSelector]);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const getDescription = (text: string) => {
    return text.split(' ').slice(0, 25).join(' ');
  };

  if (error) {
    return <span>Something went wrong!</span>;
  }

  if (loading || genre === null) {
    return <span>Loading...</span>;
  }

  return (
    <Layout>
      <Container>
        <Genre>
          <Genre.Header>
            <Genre.Title variant="h4">{genre.name}</Genre.Title>

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
            {genre.items.map((item: any) => {
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
    </Layout>
  );
};

export default GenrePage;
