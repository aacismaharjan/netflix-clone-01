import { Button, Grid, TextField } from '@mui/material';
import Auth from '../components/auth';

const Login = () => {
  return (
    <Auth.Container>
      <Auth.Form>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <TextField
              type="email"
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              type="password"
              name="password"
              label="Password"
              fullWidth
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Button variant="contained" color="primary" fullWidth>
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
