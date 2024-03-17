import { MovieListType } from "../models";
import { apiConfig } from "./api-config";

// funcion para hacer trert peliculas por tipo
export async function getMovieListData(movieListType: MovieListType, page = 1) {
  const movieListUrl = getMovieListUrl(movieListType, page);
  return fetchMovieListData(movieListUrl, "getMovieListData");
}

// funcion para traer peliculas por busquda
export async function searchMovie(query: string) {
  const movieSearchUrl = getMovieSearchUrl(query);
  return fetchMovieListData(movieSearchUrl, "searchMovie")
  console.log(movieSearchUrl);
}

// funcion para hacer el fetch de las url y traer datos
async function fetchMovieListData(url, functionName) {
  const response = await fetch(url);
  const data = await response.json();

  if (data?.success === false) {
    throw new Error(`error${functionName}): ${data.status_message} `);
  }
  return data?.results ?? [];
}

// funcion que monta la url para traer el TIPO DE LISTA
function getMovieListUrl(movieListType: MovieListType, page = 1): string {
  let movieListUrl = apiConfig.baseUrl;
  movieListUrl += `/movie/${movieListType}`;
  movieListUrl += `?language=${apiConfig.langIso}`;
  movieListUrl += `&api_key=${apiConfig.apiKey}`;
  movieListUrl += `&page=${page}`;

  return movieListUrl;
}

// funcion que monta la url para el SEARCH
function getMovieSearchUrl(query: string, page = 1): string {
  let movieListUrl = apiConfig.baseUrl;
  movieListUrl += "search/movie";
  movieListUrl += `?query=${query}`;
  movieListUrl += `&include_adult=false`;
  movieListUrl += `&language=${apiConfig.langIso}`;
  movieListUrl += `&api_key=${apiConfig.apiKey}`;
  movieListUrl += `&page=${page}`;

  return movieListUrl;
}