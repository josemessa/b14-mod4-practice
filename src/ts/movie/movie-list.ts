import { getMovieListData, getMovieSearchData } from "../api/api";
import { apiConfig } from "../api/api-config";
import {
  addCoverEventListener,
  addGridLayoutClickListener,
  addListLayoutClickListener,
  addSearchListener,
  addSelectChangeListener,
  query,
} from "../events/events";
import { filterMoviesData } from "../mappers/mappers";
import { MovieListLayout, MovieListType, PageMode } from "../models";
import { MovieList } from "../models/movie-list.interface";
import { getElementByIdFrom, showContent } from "../utils/utils";


let currentMovieListType = MovieListType.NowPlaying;
let currentMovieListLayout = MovieListLayout.Grid;
let movieListData: MovieList[] = [];
let currentMode = PageMode.GridList;

export function showCurrentMode() {
  if (currentMode === PageMode.GridList) {
    showMovieList();
  } else if (currentMode === PageMode.Search) {
    showMovieSearch();
  }
}
export async function showMovieList() {
  currentMode = PageMode.GridList;
  // Clean app element
  const appElement = getElementByIdFrom("app", "addMovieListElements");
  appElement.innerHTML = "";

  // toolbar
  addGridLayoutClickListener();
  addListLayoutClickListener();
  addSelectChangeListener();
  addSearchListener();

  // Data
  const moviesData = await getMovieListData(currentMovieListType);
  movieListData = filterMoviesData(moviesData);

  if (currentMovieListLayout === MovieListLayout.Grid) {
    addMovieGridElements();
  } else if (currentMovieListLayout === MovieListLayout.List) {
    addMovieListElements();
  }
}

export async function showMovieSearch() {
  currentMode = PageMode.Search;
  // Clean app element
  const appElement = getElementByIdFrom("app", "addMovieListElements");
  appElement.innerHTML = "";

  // toolbar
  addGridLayoutClickListener();
  addListLayoutClickListener();
  addSelectChangeListener();
  addSearchListener();

  // Data
  const moviesData = await getMovieSearchData(query, 1);
  movieListData = filterMoviesData(moviesData);
  console.log(movieListData);

  if (currentMovieListLayout === MovieListLayout.Grid) {
    addMovieGridElements();
  } else if (currentMovieListLayout === MovieListLayout.List) {
    addMovieListElements();
  }
}

export function addMovieGridElements() {
  const appElement = getElementByIdFrom("app", "addMovieListElements");
  appElement.innerHTML = "";
  // ForEach con los movie data
  // crear un element y añadirlo a appElement
  const container = document.createElement("div");
  container.setAttribute("id", "container");
  container.classList.add("container");

  const row = document.createElement("div");
  row.classList.add("row");

  appElement.appendChild(container);
  container.appendChild(row);

  movieListData.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const column = document.createElement("div");
    column.classList.add("col-lg-3", "col-md-4", "col-sm-6");

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
    // estructuracion de carpetas
    column.appendChild(card);
    row.appendChild(column);

    card.appendChild(cover);
    card.appendChild(title);
    card.appendChild(year);
    card.appendChild(rating);
    card.appendChild(description);
  });
  const pagination= document.createElement("div")
    pagination.classList.add("container","d-flex", "justify-content-center")
    pagination.innerHTML+= `<nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#">Previous</a></li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </nav>`

  container.appendChild(pagination)
  addCoverEventListener();
}

export async function addMovieListElements() {
  const appElement = getElementByIdFrom("app", "addMovieListElements");

  // ForEach con los movie data
  // crear un element y añadirlo a appElement
  const container = document.createElement("div");
  container.setAttribute("id", "container");
  container.classList.add("container");

  const row = document.createElement("div");
  row.classList.add("row");

  appElement.appendChild(container);
  container.appendChild(row);

  movieListData.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("d-flex");
    const column = document.createElement("div");
    column.classList.add("d-flex", "flex-column");

    // card elements

    const coverContainer = document.createElement("div");
    coverContainer.classList.add("cover-container");

    const cover = document.createElement("img");
    cover.classList.add("cover");
    cover.src = `${apiConfig.posterBaseUrl + movie.cover}`;
    cover.setAttribute("movie-id", `${movie.id}`);

    const dataContainer = document.createElement("div");
    dataContainer.classList.add("data-container");

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

    
    // estructuracion de carpetas
    column.appendChild(card);
    row.appendChild(column);

    card.appendChild(coverContainer);
    coverContainer.appendChild(cover);
    card.appendChild(dataContainer);
    dataContainer.appendChild(title);
    dataContainer.appendChild(year);
    dataContainer.appendChild(rating);
    dataContainer.appendChild(description);
  });
  const pagination= document.createElement("div")
    pagination.classList.add("container","d-flex", "justify-content-center")
    pagination.innerHTML+= `<nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#">Previous</a></li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </nav>`

  container.appendChild(pagination)
  addCoverEventListener();
}

export function setCurrentMovieListType(movieListType: MovieListType) {
  currentMovieListType = movieListType;
  showMovieList();
}

export function setCurrentMovieListLayout(movieListLayout: MovieListLayout) {
  if (currentMovieListLayout !== movieListLayout) {
    currentMovieListLayout = movieListLayout;
    showCurrentMode();
  }
}
