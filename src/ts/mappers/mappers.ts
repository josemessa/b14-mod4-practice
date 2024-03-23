import { MovieDetails } from "../models/movie-detail.interface";
import { MovieList } from "../models/movie-list.interface";

//  MAPPER de data peliculas para las LISTAS
export function filterMoviesData(movies): MovieList[] {
  return movies.map((movie) => {
    const { id, title, overview, poster_path, release_date, vote_average } =
      movie;
    return {
      id,
      cover: poster_path,
      title,
      rating: vote_average.toFixed(1),
      year: release_date.split("-").shift(),
      description: overview,
    };
  });
}

//  MAPPER de data peliculas para DETALLE

export function filterDetailsData(movie): MovieDetails {
  const {
    id,
    backdrop_path,
    title,
    overview,
    poster_path,
    release_date,
    vote_average,
    credits,
    runtime,
    genres,
  } = movie;

  const director = credits.crew.find(
    (crewMember) => crewMember.job === "Director"
  );
  const directorName = director ? director.name : "";
  const directorPic = director ? director.profile_path : null;

  const cast = credits.cast.slice(0, 6).map((actor) => ({
    name: actor.name,
    profile_path: actor.profile_path,
    character: actor.character,
  }));

  return {
    id,
    background: backdrop_path,
    cover: poster_path,
    title,
    rating: vote_average.toFixed(1),
    year: release_date.split("-").shift(),
    description: overview,
    director: directorName,
    directorPhoto: directorPic,
    cast,
    duracion: runtime,
    generos: genres.map((genre) => genre.name).join(", "),
  };
}
