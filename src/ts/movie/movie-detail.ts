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
  console.log(movieDetail)
  movieDetailData = filterDetailsData(movieDetail);
  addMovieDetailElements();
}

export function addMovieDetailElements() {
  const appElement = getElementByIdFrom("app", "addMovieListElements");
  appElement.classList.remove("container")
  appElement.classList.add("main-container")

  const detailContainer = document.createElement("div");
  detailContainer.setAttribute("id", "detail-detailContainer");
  detailContainer.classList.add("detail-container", "container");

  // detail elements

  const background = document.createElement("img");
  background.classList.add("background");
  background.setAttribute("id", "background");
  background.src=`${apiConfig.backdropBaseUrl+ movieDetailData.background}`


  const cover = document.createElement("img");
  cover.classList.add("cover");
  cover.setAttribute("id", "movie-id");
  cover.src = `${apiConfig.posterBaseUrl + movieDetailData.cover}`;

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

  // detailContainer.appendChild(background)
 appElement.appendChild(background)
  detailContainer.appendChild(cover);
  detailContainer.appendChild(title);
  detailContainer.appendChild(year);
  detailContainer.appendChild(rating);
  detailContainer.appendChild(description);

  appElement.appendChild(detailContainer)
}
