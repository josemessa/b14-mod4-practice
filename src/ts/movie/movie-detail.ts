import {
  fetchMovieDetailsData,
  fetchMovieListData,
  getMovieDetailUrl,
} from "../api/api";
import { apiConfig } from "../api/api-config";
import { movieID } from "../events/events";
import { filterDetailsData, filterMoviesData } from "../mappers/mappers";
import { MovieDetails } from "../models/movie-detail.interface";
import { getElementByIdFrom } from "../utils/utils";
import { addBackToolbar } from "./toolbars";

let movieDetailData: MovieDetails[] = [];

// funcion para traer detalles de peliculas / ok

export async function getMovieDetailsData(movieID) {
  const movieDetailsUrl = getMovieDetailUrl(movieID);
  let data = fetchMovieDetailsData(movieDetailsUrl, "getMovieDetailsData");
  return data;
}

export async function showDetail(movieID) {
  // Clean app element/ ok
  const appElement = getElementByIdFrom("app", "addMovieListElements");
  appElement.innerHTML = "";

  addBackToolbar();

  // data  /ok
  const movieDetail = await getMovieDetailsData(movieID);
  console.log(movieDetail);
  movieDetailData = filterDetailsData(movieDetail);
  addMovieDetailElements();
}

export function addMovieDetailElements() {
  const appElement = getElementByIdFrom("app", "addMovieListElements");
  appElement.classList.remove("container");
  appElement.classList.add("main-container");

  const fullContainer = document.createElement("div");
  fullContainer.classList.add("full-container");
  fullContainer.style.backgroundImage = `url(${
    apiConfig.backdropBaseUrl + movieDetailData.background
  })`;

  const movieContainer=document.createElement("div")
  movieContainer.classList.add("movie-container", "container", "d-flex")

  // detail elements
  const imgContainer=document.createElement("div")
  imgContainer.classList.add("img-container")

  const cover = document.createElement("img");
  cover.classList.add("cover","border","border-3");
  cover.setAttribute("id", "movie-cover");
  cover.src = `${apiConfig.posterBaseUrl + movieDetailData.cover}`;

  // div con los textos
  const textContainer=document.createElement("div")
  textContainer.classList.add("text-container","ms-5")

  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = movieDetailData.title;

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent = movieDetailData.description;

  const year = document.createElement("p");
  year.classList.add("year");
  year.textContent = `Year:  ${movieDetailData.year}`;

  const rating = document.createElement("p");
  rating.classList.add("rating");
  rating.textContent = `Rating:  ${movieDetailData.rating}`;

  imgContainer.appendChild(cover)

  textContainer.appendChild(title)
  textContainer.appendChild(description)
  textContainer.appendChild(year)
  textContainer.appendChild(rating)

  movieContainer.appendChild(imgContainer)
  movieContainer.appendChild(textContainer)

  fullContainer.appendChild(movieContainer)
  appElement.appendChild(fullContainer)
}
