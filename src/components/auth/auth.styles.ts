import styled from 'styled-components';
import { Container } from '@mui/material';

export const StyledContainer = styled(Container)`
  display: flex !important;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  ${(props) => props.theme.breakpoints.down('md')} {
    display: flex;
    padding-top: 2rem;
    padding-bottom: 2rem;
    align-items: flex-start;
    min-height: unset;
  }
`;

export const Form = styled.form`
  max-width: 560px;
  padding: 5rem;
  border: 1px solid #888;

  ${(props) => props.theme.breakpoints.down('md')} {
    padding: 2rem 1rem 1rem 1rem;
  }
`;
