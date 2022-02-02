import { Typography, Grid } from '@mui/material';
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

export const StyledTitle = styled(Typography)`
  font-weight: bold !important;
`;
