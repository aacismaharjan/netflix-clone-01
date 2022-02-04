export const formatMovie = (movie: any) => {
  return {
    id: movie.id,
    title: movie.title,
    description: movie.storyline,
    poster_path: movie.posterurl,
    genres: movie.genres,
    releaseDate: movie.releaseDate,
  };
};

export const movieResponsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1200, min: 960 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 960, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 575 },
    items: 2,
  },
  superLargeMobile: {
    breakpoint: { max: 575, min: 475 },
    items: 1,
  },
  largeMobile: {
    breakpoint: { max: 475, min: 0 },
    items: 1,
  },
};

export const arrangeMovies = (
  firstMovie: any,
  secondMovie: any,
  sortBy: 'asc' | 'desc'
) => {
  const getDuration = (time: number) => new Date(time).getTime();

  if (sortBy === 'asc')
    return (
      getDuration(firstMovie.releaseDate) - getDuration(secondMovie.releaseDate)
    );
  else
    return (
      getDuration(secondMovie.releaseDate) - getDuration(firstMovie.releaseDate)
    );
};
