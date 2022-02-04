import React, { useEffect } from 'react';
import { StylesProvider } from '@mui/styles';
import { ThemeProvider } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Routes, Route, Navigate } from 'react-router-dom';
import theme from './theme';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Genre from './pages/Genre';
import WatchList from './pages/WatchList';
import GlobalStyles from './global-styles';
import Detail from './pages/Detail';
import RequireAuth from './helpers/RequireAuth';
import { useDispatch, useSelector } from 'react-redux';
import { VerifyUser } from './actions/auth/authAction';
import { GetMoviesByGenre } from './actions/genre/genreAction';
import { RootStore } from './store';

function App() {
  const dispatch = useDispatch();

  const isUserValid = useSelector(
    (state: RootStore) => state.auth.authenticated
  );

  useEffect(() => {
    dispatch(VerifyUser());
  }, [dispatch]);

  useEffect(() => {
    isUserValid && dispatch(GetMoviesByGenre());
  }, [dispatch, isUserValid]);

  return (
    <React.Fragment>
      <GlobalStyles />
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<RequireAuth component={Dashboard} />} />
              <Route
                path="/genre/:id"
                element={<RequireAuth component={Genre} />}
              />
              <Route
                path="/watchlist"
                element={<RequireAuth component={WatchList} />}
              />
              <Route
                path="/movies/:id"
                element={<RequireAuth component={Detail} />}
              />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </StyledThemeProvider>
        </ThemeProvider>
      </StylesProvider>
    </React.Fragment>
  );
}

export default App;
