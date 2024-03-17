import { getElementByIdFrom } from "../utils/utils";
import { MovieListLayout, MovieListType } from "../models";
import {
  addMovieGridElements,
  addMovieListElements,
  setCurrentMovieListLayout,
  setCurrentMovieListType,
} from "../movie/movie-list";
import { showDetail } from "../movie/moviedetail";

export const movieID=""
// control de eventos
export function addGridLayoutClickListener() {
  const elementGrid = document.getElementById("grid-display");
  elementGrid?.addEventListener("click", function () {
    setCurrentMovieListLayout(MovieListLayout.Grid);
  });
}

export function addListLayoutClickListener() {
  const elementList = document.getElementById("list-display");
  elementList?.addEventListener("click", function () {
    setCurrentMovieListLayout(MovieListLayout.List);
  });
}

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

export function addCoverEventListener() {
  const container = getElementByIdFrom("container", "addCoverEventListener");

  container.addEventListener("click", (event) => {
    const target = event.target as HTMLElement
   
    if (target.className === "cover" && target.hasAttribute("movie-id")) {
      const movieID = target.getAttribute("movie-id");
      
      console.log(movieID);
     
    }
  });
}

//  1 añadir listener a la portada

// añadir id al container para pillarlo en el event / ok!
// añadir evento click en portada de la pelicula usando el id de container / ok
// a la imagen añadir id "movie-id" /ok
// comprobar que  el elemento clickeado contiene id y la clase /ok
// si es asi llamar a la funcion que monte el nuevo bloque y lo incluya en el dom

// 2- montar la llamada a la api de detalles
//  -montar mapper y el model de los datos que devuielve la api
