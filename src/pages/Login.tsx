import { Button, Grid, TextField } from '@mui/material';
import Auth from '../components/auth';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { Navigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../store';
import { GetLogin } from '../actions/auth/authAction';

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const isAuthenticated = useSelector(
    (state: RootStore) => state.auth.authenticated
  );

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  const onSubmit = (data: any) => {
    console.log('data', data);
    dispatch(GetLogin(data));
  };

  return (
    <Auth.Container>
      <Auth.Form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <TextField
              type="email"
              label="Email"
              fullWidth
              variant="outlined"
              {...register('email')}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              type="password"
              label="Password"
              fullWidth
              variant="outlined"
              {...register('password')}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign In
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Button variant="outlined" color="primary" fullWidth>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Auth.Form>
    </Auth.Container>
  );
};

export default Login;
