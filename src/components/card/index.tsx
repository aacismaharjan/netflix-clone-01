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

Card.Image = function CardImage({ ...restProps }: any) {
  return <StyledImage {...restProps} />;
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
