// funciones que trasnsforman los datos

export function filterMoviesData(movies) {
  return movies.map((movie) => {
    const {  title, overview, poster_path, release_date, vote_average } =
      movie;
    return {
      cover: poster_path,
      title,
      rating: vote_average,
      year: release_date.split("-").shift(),
      description: overview,      
    };
  });
}

