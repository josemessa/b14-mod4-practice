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

  const movieContainer = document.createElement("div");
  movieContainer.classList.add("movie-container", "container", "d-flex");

  // detail elements
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const cover = document.createElement("img");
  cover.classList.add("cover", "border", "border-5");
  cover.setAttribute("id", "movie-cover");
  cover.src = `${apiConfig.posterBaseUrl + movieDetailData.cover}`;

  const dataContainer = document.createElement("div");
  dataContainer.classList.add("data-container");
  // div con los textos
  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");

  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = movieDetailData.title;

  const description = document.createElement("p");
  description.classList.add("detail-description");
  description.textContent = movieDetailData.description;

  const littleDetailsContainer = document.createElement("div");
  littleDetailsContainer.classList.add("little-details", "d-flex", "justify-content-around");

  const year = document.createElement("p");
  year.classList.add("year");
  year.textContent = `Year:  ${movieDetailData.year}`;

  const runtime = document.createElement("p");
  runtime.classList.add("runtime");
  runtime.textContent = `Duración:  ${movieDetailData.duracion} minutos`;

  const rating = document.createElement("p");
  rating.classList.add("rating");
  rating.textContent = `Rating:  ${movieDetailData.rating}`;

  // div con el cast

  const castDataContainer = document.createElement("div");
  castDataContainer.classList.add("cast-data");

  const director = document.createElement("div");
  director.classList.add("director");

  const directorName = document.createElement("p");
  directorName.classList.add("director-name");
  directorName.textContent = `Director:   ${movieDetailData.director}`;

  const directorPhoto = document.createElement("img");
  directorPhoto.classList.add("director-photo");
  directorPhoto.src = `${
    apiConfig.backdropBaseUrl + movieDetailData.directorPhoto
  }`;

  const cast = document.createElement("div");
  cast.classList.add("cast");

  // Agregar los nombres y las imágenes de los actores
  movieDetailData.cast.forEach((actor) => {
    const actorContainer = document.createElement("div");
    actorContainer.classList.add("actor-container");

    const actorName = document.createElement("p");
    actorName.classList.add("actor-name");
    actorName.textContent = actor.name;

    const actorCharacter = document.createElement("p");
    actorCharacter.classList.add("actor-character");
    actorCharacter.textContent = `"${actor.character}"`;

    const actorPhoto = document.createElement("img");
    actorPhoto.classList.add("actor-photo");
    actorPhoto.src = `${apiConfig.posterBaseUrl + actor.profile_path}`;

    actorContainer.appendChild(actorName);
    actorContainer.appendChild(actorCharacter);
    actorContainer.appendChild(actorPhoto);
    cast.appendChild(actorContainer);
  });

  imgContainer.appendChild(cover);

  director.appendChild(directorName);
  director.appendChild(directorPhoto);

  textContainer.appendChild(title);
  textContainer.appendChild(description);
  textContainer.appendChild(littleDetailsContainer);

  littleDetailsContainer.appendChild(year);
  littleDetailsContainer.appendChild(runtime);
  littleDetailsContainer.appendChild(rating);
  castDataContainer.appendChild(director);
  castDataContainer.appendChild(cast);

  movieContainer.appendChild(imgContainer);
  movieContainer.appendChild(dataContainer);
  dataContainer.appendChild(textContainer);
  dataContainer.appendChild(castDataContainer);

  fullContainer.appendChild(movieContainer);
  appElement.appendChild(fullContainer);
}
