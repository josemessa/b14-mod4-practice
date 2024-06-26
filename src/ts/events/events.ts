import { getElementByIdFrom } from "../utils/utils";
import { MovieListLayout, MovieListType } from "../models";
import {
  setCurrentMovieListLayout,
  setCurrentMovieListType,
  showCurrentMode,
  showMovieSearch,
} from "../movie/movie-list";
import { showDetail } from "../movie/movie-detail";
import { addToolbar } from "../movie/toolbars";
import { setNextButton, setPage, setPreviousButton } from "../api/api";

export const movieID = "";

//LISTENER icono grid

export function addGridLayoutClickListener() {
  const elementGrid = document.getElementById("grid-display");
  elementGrid?.addEventListener("click", function () {
    setCurrentMovieListLayout(MovieListLayout.Grid);
  });
}
//LISTENER icono lista
export function addListLayoutClickListener() {
  const elementList = document.getElementById("list-display");
  elementList?.addEventListener("click", function () {
    setCurrentMovieListLayout(MovieListLayout.List);
  });
}

//LISTENER selector tipo lista
export function addSelectChangeListener() {
  const elementSelect = getElementByIdFrom(
    "movie-type-select",
    "addSelectChangeListener"
  ) as HTMLSelectElement;

  elementSelect.addEventListener("change", function () {
    const optionSelected = elementSelect.value as MovieListType;
    setCurrentMovieListType(optionSelected);
  });
}
//LISTENER portada pelicula => pagina detalle
export function addCoverEventListener() {
  const container = getElementByIdFrom("container", "addCoverEventListener");
  container.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    if (target.className === "cover" && target.hasAttribute("movie-id")) {
      const movieID = target.getAttribute("movie-id");
      showDetail(movieID);
    }
  });
}
//LISTENER boton volver atras
export function addBackButtonListener() {
  const button = getElementByIdFrom("back-button", "addBackButtonListener");
  button.addEventListener("click", (event) => {
    addToolbar();
    showCurrentMode();
  });
}

//LISTENER boton search
export let query: string = "";

export function addSearchListener() {
  const button = getElementByIdFrom("search-button", "addSearchListener");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    let searchInput = document.getElementById(
      "search-input"
    ) as HTMLInputElement;
    query = searchInput.value;
    setPage(1);
    showMovieSearch();
    searchInput.value = "";
  });
}

//LISTENER pagination
export function addPaginationListeners() {
  console.log("pagination ok");
  const previousPage = document.getElementById("previous");
  const nextPage = document.getElementById("next");
  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");
  const page3 = document.getElementById("page3");

  if (previousPage) {
    previousPage.addEventListener("click", function (event) {
      event.preventDefault();
      setPreviousButton();
      showCurrentMode();
      console.log("previo");
    });
  }

  if (nextPage) {
    nextPage.addEventListener("click", function (event) {
      event.preventDefault();
      setNextButton();
      showCurrentMode();
      console.log("next");
    });
  }

  if (page1) {
    page1.addEventListener("click", function (event) {
      event.preventDefault();
      setPage(1);
      showCurrentMode();
    });
  }

  if (page2) {
    page2.addEventListener("click", function (event) {
      event.preventDefault();
      setPage(2);
      showCurrentMode();
    });
  }

  if (page3) {
    page3.addEventListener("click", function (event) {
      event.preventDefault();
      setPage(3);
      showCurrentMode();
    });
  }
}
