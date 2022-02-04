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
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1200, min: 960 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 960, min: 0 },
    items: 2,
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
