// funciones que trasnsforman los datos

import { MovieDetails } from "../models/movie-detail.interface";
import { MovieList } from "../models/movie-list.interface";

export function filterMoviesData(movies): MovieList[] {
  return movies.map((movie) => {
    const { id, title, overview, poster_path, release_date, vote_average } =
      movie;
    return {
      id,
      cover: poster_path,
      title,
      rating: vote_average,
      year: release_date.split("-").shift(),
      description: overview,      
    };
  });
}

export function filterDetailsData(movie): MovieDetails[] {
  const { id, backdrop_path, title, overview, poster_path, release_date, vote_average , director } =
      movie;
    return {
      id,
      background: backdrop_path,   
      cover: poster_path,
      title,
      rating: vote_average,
      year: release_date.split("-").shift(),
      description: overview,   
    };
  };


