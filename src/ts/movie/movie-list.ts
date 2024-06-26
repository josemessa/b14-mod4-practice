import {
  getMovieListData,
  getMovieSearchData,
  page,
  setPage,
} from "../api/api";
import { apiConfig } from "../api/api-config";
import {
  addCoverEventListener,
  addGridLayoutClickListener,
  addListLayoutClickListener,
  addPaginationListeners,
  addSearchListener,
  addSelectChangeListener,
  query,
} from "../events/events";
import { filterMoviesData } from "../mappers/mappers";
import { MovieListLayout, MovieListType, PageMode } from "../models";
import { MovieList } from "../models/movie-list.interface";
import { getElementByIdFrom } from "../utils/utils";
import { addToolbar } from "./toolbars";

let currentMovieListType = MovieListType.NowPlaying;
let currentMovieListLayout = MovieListLayout.Grid;
let movieListData: MovieList[] = [];
let currentMode = PageMode.GridList;

// Funcion que define el modo actual de la pagina
export function showCurrentMode() {
  if (currentMode === PageMode.GridList) {
    showMovieList();
  } else if (currentMode === PageMode.Search) {
    showMovieSearch();
  }
}
// Funcion que monta el modo LISTA/GRID (currentMode)
export async function showMovieList() {
  currentMode = PageMode.GridList;

  const appElement = getElementByIdFrom("app", "addMovieListElements");
  appElement.innerHTML = "";

  // toolbar
  addGridLayoutClickListener();
  addListLayoutClickListener();
  addSelectChangeListener();

  // Data
  const moviesData = await getMovieListData(currentMovieListType);
  movieListData = filterMoviesData(moviesData);

  if (currentMovieListLayout === MovieListLayout.Grid) {
    addMovieGridElements();
  } else if (currentMovieListLayout === MovieListLayout.List) {
    addMovieListElements();
  }
}
// Funcion que monta el modo SEARCH
export async function showMovieSearch() {
  const toolbar = getElementByIdFrom("toolbar", "showMovieSearch");
  toolbar.innerHTML = "";
  currentMode = PageMode.Search;

  const appElement = getElementByIdFrom("app", "addMovieListElements");
  appElement.innerHTML = "";

  // toolbar
  addToolbar();
  addGridLayoutClickListener();
  addListLayoutClickListener();
  addSelectChangeListener();

  // Data
  const moviesData = await getMovieSearchData(query, page);
  movieListData = filterMoviesData(moviesData);
  console.log(movieListData);
  if (movieListData.length === 0) {
    const appElement = getElementByIdFrom("app", "addMovieListElements");
    appElement.innerHTML = "";

    const notFound = document.createElement("p");
    notFound.classList.add("not-found", "container");
    notFound.textContent =
      "Oooops! no se encontraron resultados... Intentalo de nuevo.";

    appElement.appendChild(notFound);
    return;
  }

  if (currentMovieListLayout === MovieListLayout.Grid) {
    addMovieGridElements();
  } else if (currentMovieListLayout === MovieListLayout.List) {
    addMovieListElements();
  }
}
// Insercion en el DOM del modo GRID
export function addMovieGridElements() {
  const appElement = getElementByIdFrom("app", "addMovieListElements");
  appElement.innerHTML = "";

  const container = document.createElement("div");
  container.setAttribute("id", "container");
  container.classList.add("container");

  const row = document.createElement("div");
  row.classList.add("row");

  appElement.appendChild(container);
  container.appendChild(row);

  movieListData.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add(
      "card",
      "mb-4",
      "border",
      "border",
      "border-4"
    );
    const column = document.createElement("div");
    column.classList.add("col-lg-3", "col-md-4", "col-sm-6");

    // card elements
    const cover = document.createElement("img");
    cover.classList.add("cover");
    cover.setAttribute("id", "movie-id");
    cover.src = `${apiConfig.posterBaseUrl + movie.cover}`;
    cover.setAttribute("movie-id", `${movie.id}`);

    const title = document.createElement("h2");
    title.classList.add("title", "m-2");
    title.textContent = movie.title;

    const description = document.createElement("p");
    description.classList.add("description", "m-2", "fst-italic");
    description.textContent = movie.description;

    const year = document.createElement("p");
    year.classList.add("year", "m-2", "fw-bolder");
    year.textContent = `Year:  ${movie.year}`;

    const rating = document.createElement("p");
    rating.classList.add("rating", "m-2", "fw-bolder");
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
  const pagination = document.createElement("div");
  pagination.classList.add(
    "container",
    "d-flex",
    "justify-content-center",
    "p-5",
    "mb-5"
  );
  pagination.innerHTML = `<nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link " id="previous" href="javascript:void(0)">Previous</a></li>
      <li class="page-item"><a class="page-link " id="page1" href="javascript:void(0)">1</a></li>
      <li class="page-item"><a class="page-link " id="page2" href="javascript:void(0)">2</a></li>
      <li class="page-item"><a class="page-link " id="page3" href="javascript:void(0)">3</a></li>
      <li class="page-item"><a class="page-link " id="next" href="javascript:void(0)">Next</a></li>
    </ul>
  </nav>`;

  container.appendChild(pagination);
  addCoverEventListener();
  addPaginationListeners();
}
// Insercion en el DOM del modo LIST
export async function addMovieListElements() {
  const appElement = getElementByIdFrom("app", "addMovieListElements");

  const container = document.createElement("div");
  container.setAttribute("id", "container");
  container.classList.add("container");

  const row = document.createElement("div");
  row.classList.add("row", "row-gap-4");

  appElement.appendChild(container);
  container.appendChild(row);

  movieListData.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("d-flex", "border", "border-3", "data-movie");
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
    dataContainer.classList.add(
      "data-container",
      "d-flex",
      "flex-column",
      "justify-content-center"
    );

    const title = document.createElement("h2");
    title.classList.add("title", "ms-4");
    title.textContent = movie.title;

    const description = document.createElement("p");
    description.classList.add("description", "ms-4", "fst-italic");
    description.textContent = movie.description;

    const year = document.createElement("p");
    year.classList.add("year", "ms-4", "fw-bolder");
    year.textContent = `Year:  ${movie.year}`;

    const rating = document.createElement("p");
    rating.classList.add("rating", "ms-4", "fw-bolder");
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
  const pagination = document.createElement("div");
  pagination.classList.add(
    "container",
    "d-flex",
    "justify-content-center",
    "p-5",
    "mb-5"
  );
  pagination.innerHTML = `<nav aria-label="Page navigation example">
    <ul class="pagination mt-5 mb-5">
    <li class="page-item"><a class="page-link " id="previous" href="javascript:void(0)">Previous</a></li>
      <li class="page-item"><a class="page-link " id="page1" href="javascript:void(0)">1</a></li>
      <li class="page-item"><a class="page-link " id="page2" href="javascript:void(0)">2</a></li>
      <li class="page-item"><a class="page-link " id="page3" href="javascript:void(0)">3</a></li>
      <li class="page-item"><a class="page-link " id="next" href="javascript:void(0)">Next</a></li>
    </ul>
  </nav>`;

  container.appendChild(pagination);
  addCoverEventListener();
  addPaginationListeners();
}

// Funcion que guarda los valores del tipo de LISTA
export function setCurrentMovieListType(movieListType: MovieListType) {
  currentMovieListType = movieListType;
  setPage(1);
  showMovieList();
}
// Funcion que guarda los valores del tipo de VISTA
export function setCurrentMovieListLayout(movieListLayout: MovieListLayout) {
  if (currentMovieListLayout !== movieListLayout) {
    currentMovieListLayout = movieListLayout;
    showCurrentMode();
  }
}
