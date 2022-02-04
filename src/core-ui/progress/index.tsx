import { Typography } from '@mui/material';
import {
  StyledCircularProgress,
  StyledContainer,
  StyledErrorContainer,
} from './progress.styles';

export default function MoviesLoading() {
  return (
    <StyledContainer>
      <StyledCircularProgress></StyledCircularProgress>
    </StyledContainer>
  );
}

export const MoviesFailed = () => {
  return (
    <StyledErrorContainer>
      <Typography variant="h5">Something went wrong!</Typography>
    </StyledErrorContainer>
  );
};
