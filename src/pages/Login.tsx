import { Alert, Button, Grid, Snackbar, TextField } from '@mui/material';
import Auth from '../components/auth';
import { useForm } from 'react-hook-form';
import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../store';
import { GetLogin, GetSignup } from '../actions/auth/authAction';

const Login = () => {
  const dispatch = useDispatch();
  const location: any = useLocation();

  const { register, handleSubmit } = useForm();
  const authSelector = useSelector((state: RootStore) => state.auth);
  const isAuthenticated = useSelector(
    (state: RootStore) => state.auth.authenticated
  );

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (authSelector.error) {
      setOpen(Boolean(authSelector.error));
    }
  }, [authSelector]);

  const onSubmit = (data: any) => {
    dispatch(GetLogin(data));
  };

  const handleSignup = (data: any) => {
    dispatch(GetSignup(data));
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  if (isAuthenticated) {
    return <Navigate to={location.state.from.pathname} />;
  }

  if (authSelector.loading) {
    return (
      <Auth.Loader>
        <img src="./netflix-logo.svg" alt="Netflix" width="140px" />
      </Auth.Loader>
    );
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

      <Snackbar
        open={Boolean(open)}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {authSelector.error}
        </Alert>
      </Snackbar>
    </Auth.Container>
  );
};

export default Login;
