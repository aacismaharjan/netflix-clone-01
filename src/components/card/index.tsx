import { useState } from 'react';
import {
  StyledCard,
  StyledLink,
  StyledImage,
  StyledContent,
  StyledHeader,
  StyledBody,
} from './card.styles';

function Card({ children, ...restProps }: any) {
  return <StyledCard {...restProps}>{children}</StyledCard>;
}

Card.Link = function CardLink({ children, ...restProps }: any) {
  return <StyledLink {...restProps}>{children}</StyledLink>;
};

Card.Image = function CardImage({ src, ...restProps }: any) {
  const [image, setImage] = useState(src);
  const fallback =
    'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Baahubali_the_Conclusion.jpg/220px-Baahubali_the_Conclusion.jpg';
  return (
    <StyledImage
      src={image}
      {...restProps}
      onError={() => {
        setImage(fallback);
      }}
    />
  );
};

Card.Content = function CardContent({ children, ...restProps }: any) {
  return <StyledContent {...restProps}>{children}</StyledContent>;
};

Card.Header = function CardHeader({ children, ...restProps }: any) {
  return <StyledHeader {...restProps}>{children}</StyledHeader>;
};

Card.Body = function CardBody({ children, ...restProps }: any) {
  return <StyledBody {...restProps}>{children}</StyledBody>;
};

export default Card;
