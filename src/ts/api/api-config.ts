import { movieID } from "../events/events";
import{filterMoviesData} from "./mappers"

export const apiConfig = {
  apiKey: "15d2ea6d0dc1d476efbca3eba2b9bbfb",
  langIso: "es-ES",
  baseUrl: "https://api.themoviedb.org/3/",
  posterBaseUrl: "http://image.tmdb.org/t/p/w500//",
  backdropBaseUrl: "https://image.tmdb.org/t/p/original/",
  movieId: movieID
};



