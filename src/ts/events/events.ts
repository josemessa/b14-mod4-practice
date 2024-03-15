import { getElementByIdFrom } from "../utils/utils";
import { MovieListLayout, MovieListType } from "../models";
import {
  addMovieGridElements,
  addMovieListElements,
  setCurrentMovieListLayout,
  setCurrentMovieListType,
} from "../movie/movie-list";



// control de eventos
export function addGridLayoutClickListener() {
  const elementGrid = document.getElementById("grid-display");
  elementGrid?.addEventListener("click", function () {
    setCurrentMovieListLayout(MovieListLayout.Grid)
  });
}

export function addListLayoutClickListener() {
  const elementList = document.getElementById("list-display");
  elementList?.addEventListener("click", function () {
    setCurrentMovieListLayout(MovieListLayout.List)
  
  });
}

export function addSelectChangeListener() {
  const elementSelect = getElementByIdFrom(
    "movie-type-select",
    "addSelectChangeListener"
  ) as HTMLSelectElement;

  elementSelect.addEventListener("change", function () {
    const optionSelected = elementSelect.value as MovieListType;
    setCurrentMovieListType(optionSelected)
    ;
  });
}

//  1 añadir listener a la portada

// añadir id al container para pillarlo en el event
// añadir evento click en portada de la pelicula usando el id de container
// a la imagen añadir id "movie-id"
// comprobar que  el elemento clickeado contiene el elemento
// si es asi llamar a la funcion que monte el nuevo bloque y lo incluya en el dom 

// 2- montar la llamada a la api de detalles
//  -montar mapper y el model de los datos que devuielve la api







