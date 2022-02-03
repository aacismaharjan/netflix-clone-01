import { Link } from '@mui/material';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export const StyledImage = styled.img`
  width: 100%;
`;

export const StyledContent = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 50px 10px 7px;
  background-image: linear-gradient(
    180deg,
    rgba(51, 55, 69, 0),
    rgba(16, 21, 40, 0.95)
  );
  transition: inherit;
`;

export const StyledHeader = styled.h3`
  color: white;
`;

export const StyledBody = styled.p`
  color: white;
  padding: 8px 16px 0px 0px;
  max-height: 0;
  opacity: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: inherit;
`;

export const StyledCard = styled.div`
  position: relative;
  font-size: 14px;
  line-height: 21px;
  max-width: 180px;
  height: 250px;
  overflow: hidden;
  border-radius: 8px;
  transition: 0.75s ease all;

  &:hover {
    cursor: pointer;
  }

  &:hover ${StyledBody} {
    max-height: 200px;
    opacity: 1;
  }
`;
