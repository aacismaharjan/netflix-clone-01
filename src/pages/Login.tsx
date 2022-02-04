import { Button, Grid, TextField } from '@mui/material';
import Auth from '../components/auth';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../store';
import { GetLogin, GetSignup } from '../actions/auth/authAction';

const Login = () => {
  const dispatch = useDispatch();
  const location: any = useLocation();

  const { register, handleSubmit } = useForm();

  const isAuthenticated = useSelector(
    (state: RootStore) => state.auth.authenticated
  );

  const onSubmit = (data: any) => {
    dispatch(GetLogin(data));
  };

  const handleSignup = (data: any) => {
    dispatch(GetSignup(data));
  };

  if (isAuthenticated) {
    return <Navigate to={location.state.from.pathname} />;
  }

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
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              fullWidth
            >
              Sign In
            </Button>
          </Grid>

          <Grid item xs={12} md={6} onClick={handleSubmit(handleSignup)}>
            <Button variant="outlined" size="large" color="primary" fullWidth>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Auth.Form>
    </Auth.Container>
  );
};

export default Login;
