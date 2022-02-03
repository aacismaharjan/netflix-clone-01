import { Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledGenre = styled.div`
  padding: 16px 0;
`;

export const StyledGrid = styled(Grid)`
  &.MuiGrid-container {
  }

  &.MuiGrid-item {
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  & > div {
    flex-basis: 50%;
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  transition: 0.3s all ease;

  &:hover {
    opacity: 0.75;
  }
`;

export const StyledTitle = styled(Typography)`
  font-weight: bold !important;
`;
