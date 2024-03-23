import { movieID } from "../events/events";
import { MovieListType } from "../models";
import { apiConfig } from "./api-config";
import { query } from "../events/events";
// funcion para traer peliculas por busquda
export async function searchMovie(query: string) {
  const movieSearchUrl = getMovieSearchUrl(query, page);
  return fetchMovieListData(movieSearchUrl, "searchMovie");
}
export let page: number = 1;

// funcion para hacer trert peliculas por tipo
export async function getMovieListData(movieListType: MovieListType) {
  const movieListUrl = getMovieListUrl(movieListType, page);
  return fetchMovieListData(movieListUrl, "getMovieListData");
}
// funcion para hacer trert peliculas por search
export async function getMovieSearchData(query, page) {
  const movieSearchUrl = getMovieSearchUrl(query, page);
  return fetchMovieListData(movieSearchUrl, "getMovieListData");
}

// funcion para hacer el fetch de las url y traer datos
export async function fetchMovieListData(url, functionName) {
  const response = await fetch(url);
  const data = await response.json();

  if (data?.success === false) {
    throw new Error(`error${functionName}): ${data.status_message} `);
  }

  return data?.results ?? [];
}

// funcion para hacer el fetch de los detalles
export async function fetchMovieDetailsData(url, functionName) {
  const response = await fetch(url);
  const data = await response.json();

  if (data?.success === false) {
    throw new Error(`error${functionName}): ${data.status_message} `);
  }

  return data;
}
// funcion que monta la url para traer el TIPO DE LISTA
function getMovieListUrl(movieListType: MovieListType, page): string {
  let movieListUrl = apiConfig.baseUrl;
  movieListUrl += `/movie/${movieListType}`;
  movieListUrl += `?language=${apiConfig.langIso}`;
  movieListUrl += `&api_key=${apiConfig.apiKey}`;
  movieListUrl += `&page=${page}`;

  return movieListUrl;
}
// funcion que monta la url para traer datos de la pagina de DETALLE
export function getMovieDetailUrl(movieID: number) {
  let movieDetailUrl = apiConfig.baseUrl;
  movieDetailUrl += `/movie/${movieID}`;
  movieDetailUrl += `?language=${apiConfig.langIso}`;
  movieDetailUrl += `&api_key=${apiConfig.apiKey}`;
  movieDetailUrl += `&append_to_response=credits`;

  console.log(movieDetailUrl);
  return movieDetailUrl;
}

// funcion que monta la url para el SEARCH
function getMovieSearchUrl(query: string, page) {
  let movieListUrl = apiConfig.baseUrl;
  movieListUrl += "search/movie";
  movieListUrl += `?query=${query}`;
  movieListUrl += `&include_adult=false`;
  movieListUrl += `&language=${apiConfig.langIso}`;
  movieListUrl += `&api_key=${apiConfig.apiKey}`;
  movieListUrl += `&page=${page}`;

  return movieListUrl;
}

export function setPage(number: number) {
  page = number;
}

export function setPreviousButton() {
  page > 1 ? (page -= 1) : (page = page);
}
export function setNextButton() {
  page < 3 ? (page += 1) : (page = page);
}
