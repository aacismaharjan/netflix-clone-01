import React from 'react';
import { StylesProvider } from '@mui/styles';
import { ThemeProvider } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import theme from './theme';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Genre from './pages/Genre';
import WatchList from './pages/WatchList';
import GlobalStyles from './global-styles';
import Detail from './pages/Detail';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/genre/:id" element={<Genre />} />
              <Route path="/watchlist" element={<WatchList />} />
              <Route path="/movies/:id" element={<Detail />} />
            </Routes>
          </StyledThemeProvider>
        </ThemeProvider>
      </StylesProvider>
    </React.Fragment>
  );
}

export default App;
