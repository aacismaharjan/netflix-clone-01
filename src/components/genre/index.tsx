import {
  StyledGenre,
  StyledGrid,
  StyledTitle,
  StyledHeader,
  StyledLink,
} from './genre.styles';

function Genre({ children, ...restProps }: any) {
  return <StyledGenre {...restProps}>{children}</StyledGenre>;
}

Genre.Title = function GenreTitle({ children, ...restProps }: any) {
  return <StyledTitle {...restProps}>{children}</StyledTitle>;
};

Genre.Link = function GenreLink({ children, ...restProps }: any) {
  return <StyledLink {...restProps}>{children}</StyledLink>;
};

Genre.Grid = function GenreGrid({ children, ...restProps }: any) {
  return <StyledGrid {...restProps}>{children}</StyledGrid>;
};

Genre.Header = function GenreHeader({ children, ...restProps }: any) {
  return <StyledHeader {...restProps}>{children}</StyledHeader>;
};

export default Genre;
