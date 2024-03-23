import { MovieListType } from "../models";
import { apiConfig } from "./api-config";

export let page: number = 1;

//LLamada a la API por tipo de lista
export async function getMovieListData(movieListType: MovieListType) {
  const movieListUrl = getMovieListUrl(movieListType, page);
  return fetchMovieListData(movieListUrl, "getMovieListData");
}
//LLamada a la API por search
export async function getMovieSearchData(query, page) {
  const movieSearchUrl = getMovieSearchUrl(query, page);
  return fetchMovieListData(movieSearchUrl, "getMovieListData");
}

// Funcion fetch y obtencion de data de las listas
export async function fetchMovieListData(url, functionName) {
  const response = await fetch(url);
  const data = await response.json();

  if (data?.success === false) {
    throw new Error(`error${functionName}): ${data.status_message} `);
  }

  return data?.results ?? [];
}

// Funcion fetch y obtencion de data de los detalles
export async function fetchMovieDetailsData(url, functionName) {
  const response = await fetch(url);
  const data = await response.json();

  if (data?.success === false) {
    throw new Error(`error${functionName}): ${data.status_message} `);
  }

  return data;
}
// URL lista
function getMovieListUrl(movieListType: MovieListType, page): string {
  let movieListUrl = apiConfig.baseUrl;
  movieListUrl += `/movie/${movieListType}`;
  movieListUrl += `?language=${apiConfig.langIso}`;
  movieListUrl += `&api_key=${apiConfig.apiKey}`;
  movieListUrl += `&page=${page}`;

  return movieListUrl;
}
// URL detalle
export function getMovieDetailUrl(movieID: number) {
  let movieDetailUrl = apiConfig.baseUrl;
  movieDetailUrl += `/movie/${movieID}`;
  movieDetailUrl += `?language=${apiConfig.langIso}`;
  movieDetailUrl += `&api_key=${apiConfig.apiKey}`;
  movieDetailUrl += `&append_to_response=credits`;

  console.log(movieDetailUrl);
  return movieDetailUrl;
}

// URL search
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

// Funciones establecer paginas (paginador)

export function setPage(number: number) {
  page = number;
}

export function setPreviousButton() {
  page > 1 ? (page -= 1) : (page = page);
}
export function setNextButton() {
  page < 3 ? (page += 1) : (page = page);
}
