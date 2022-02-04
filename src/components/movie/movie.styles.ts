import { Typography, Grid } from '@mui/material';
import styled from 'styled-components';

export const StyledMovie = styled.div`
  color: white;
  position: relative;
`;

export const StyledContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    180deg,
    rgba(51, 55, 69, 0),
    rgba(16, 21, 40, 0.95)
  );

  & .MuiContainer-root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 14px;
    padding-bottom: 28px;
    height: 100%;
  }
`;
export const StyledHeader = styled.div`
  font-size: 54px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 767px) {
    & .bookmark {
      display: none;
    }
  }
`;

export const StyledTitle = styled(Typography)`
  font-weight: bold !important;
`;

export const StyledDescription = styled.p`
  padding-top: 30px;
  line-height: 1.6;
  margin-bottom: 0;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 380px;
  object-fit: cover;
  vertical-align: middle;
`;

export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    & button {
      display: none;
    }
  }
`;
