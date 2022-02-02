import {
  StyledGenre,
  StyledGrid,
  StyledTitle,
  StyledHeader,
} from './genre.styles';

function Genre({ children, ...restProps }: any) {
  return <StyledGenre {...restProps}>{children}</StyledGenre>;
}

Genre.Title = function GenreTitle({ children, ...restProps }: any) {
  return <StyledTitle {...restProps}>{children}</StyledTitle>;
};

Genre.Grid = function GenreGrid({ children, ...restProps }: any) {
  return <StyledGrid {...restProps}>{children}</StyledGrid>;
};

Genre.Header = function GenreHeader({ children, ...restProps }: any) {
  return <StyledHeader {...restProps}>{children}</StyledHeader>;
};

export default Genre;
