import { Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledGenre = styled.div`
  padding: 16px 0;
`;

export const StyledGrid = styled(Grid)`
  &.MuiGrid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    margin: 0px -8px !important;

    @media screen and (max-width: 380px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 310px) {
      grid-template-columns: auto;
      justify-content: center;
    }
  }

  &.MuiGrid-item {
    padding: 0 !important;
    margin: 0 !important;
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

  @media (max-width: 768px) {
    flex-direction: ${(props: any) => (props.hasSearch ? 'column' : 'row')};
    gap: ${(props: any) => (props.hasSearch ? '16px' : '0px')};
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
