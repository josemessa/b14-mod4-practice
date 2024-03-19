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
      rating: vote_average.toFixed(1),
      year: release_date.split("-").shift(),
      description: overview,
    };
  });
}

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
  };
}

// export function filterDetailsData(movie): MovieDetails[] {
//   const {
//     id,
//     backdrop_path,
//     title,
//     overview,
//     poster_path,
//     release_date,
//     vote_average,
//     credits,
//     runtime,
//   } = movie;
//   const directorName = credits.crew.find(
//     (crewMember) => crewMember.job === "Director"
//   ).name;
//   const directorPic = credits.crew.find(
//     (crewMember) => crewMember.job === "Director"
//   ).profile_path;

//   const cast = credits.cast.slice(0, 6).map((actor) => ({
//     name: actor.name,
//     profile_path: actor.profile_path,
//   }));

//   return {
//     id,
//     background: backdrop_path,
//     cover: poster_path,
//     title,
//     rating: vote_average,
//     year: release_date.split("-").shift(),
//     description: overview,
//     director: directorName,
//     directorPhoto: directorPic,
//     cast: castNames,
//     duracion: runtime,
//   };
// }
