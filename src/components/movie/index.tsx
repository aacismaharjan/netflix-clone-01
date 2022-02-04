import { useState } from 'react';
import {
  StyledMovie,
  StyledDescription,
  StyledImage,
  StyledContent,
  StyledHeader,
  StyledFooter,
  StyledTitle,
} from './movie.styles';

function Movie({ children, ...restProps }: any) {
  return <StyledMovie {...restProps}>{children}</StyledMovie>;
}

Movie.Image = function MovieImage({ children, src, ...restProps }: any) {
  const [image, setImage] = useState(src);
  const fallback =
    'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Baahubali_the_Conclusion.jpg/220px-Baahubali_the_Conclusion.jpg';

  return (
    <StyledImage
      src={image}
      onError={() => {
        setImage(fallback);
      }}
      {...restProps}
    >
      {children}
    </StyledImage>
  );
};

Movie.Title = function MovieTitle({ children, ...restProps }: any) {
  return <StyledTitle {...restProps}>{children}</StyledTitle>;
};

Movie.Description = function MovieDescription({ children, ...restProps }: any) {
  return <StyledDescription {...restProps}>{children}</StyledDescription>;
};

Movie.Content = function MovieContent({ children, ...restProps }: any) {
  return <StyledContent {...restProps}>{children}</StyledContent>;
};

Movie.Header = function MovieHeader({ children, ...restProps }: any) {
  return <StyledHeader {...restProps}>{children}</StyledHeader>;
};

Movie.Footer = function MovieFooter({ children, ...restProps }: any) {
  return <StyledFooter {...restProps}>{children}</StyledFooter>;
};

export default Movie;
