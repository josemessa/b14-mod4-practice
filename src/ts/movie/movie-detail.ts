import { fetchMovieListData, getMovieDetailUrl } from "../api/api";
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

  return fetchMovieListData(movieDetailsUrl, "getMovieDetailsData");
}

export async function showDetail(movieID) {
  // Clean app element
  const appElement = getElementByIdFrom("app", "addMovieListElements");
  appElement.innerHTML = "";

  addBackToolbar();

  // data
  const movieDetail = await getMovieDetailsData(movieID);
  console.log(movieDetail)

 

}

export function addMovieDetailElements() {
  const appElement = getElementByIdFrom("app", "addMovieListElements");

  const detailContainer = document.createElement("div");
  detailContainer.setAttribute("id", "detail-detailContainer");
  detailContainer.classList.add("detail-container");

  const card = document.createElement("div");
    card.classList.add("card");

      // card elements
      const cover = document.createElement("img");
      cover.classList.add("cover");
      cover.setAttribute("id", "movie-id");
      cover.src = `${apiConfig.posterBaseUrl + movie.cover}`;
      cover.setAttribute("movie-id", `${movie.id}`);
  
      const title = document.createElement("h2");
      title.classList.add("title");
      title.textContent = movie.title;
  
      const description = document.createElement("p");
      description.classList.add("description");
      description.textContent = movie.description;
  
      const year = document.createElement("p");
      year.classList.add("year");
      year.textContent = `Year:  ${movie.year}`;
  
      const rating = document.createElement("p");
      rating.classList.add("rating");
      rating.textContent = `Rating:  ${movie.rating}`;

}
