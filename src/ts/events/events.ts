import { getElementByIdFrom } from "../utils/utils";
import { MovieListLayout, MovieListType } from "../models";
import {
  addMovieGridElements,
  addMovieListElements,
  setCurrentMovieListLayout,
  setCurrentMovieListType,
  showMovieList,
} from "../movie/movie-list";
import { showDetail } from "../movie/movie-detail";
import { addToolbar } from "../movie/toolbars";



export const movieID = "";
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
    const target = event.target as HTMLElement;

    if (target.className === "cover" && target.hasAttribute("movie-id")) {
      const movieID = target.getAttribute("movie-id");      
      showDetail(movieID)
    }
  });
}


export function addBackButtonListener(){
const button= getElementByIdFrom("back-button", "addBackButtonListener")
  button.addEventListener("click", (event) =>{    
    addToolbar()
    showMovieList()
  })
}

