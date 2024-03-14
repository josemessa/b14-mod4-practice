import { getMovieListData } from "../api/api";
import { addGridLayoutClickListener, addListLayoutClickListener, addSelectChangeListener } from "../events/events";
import { filterMoviesData } from "../mappers/mappers";
import { MovieListType } from "../models";
import { getElementByIdFrom, showContent } from "../utils/utils";
import { addToolbar } from "./toolbar";

let currentMovieListType = MovieListType.NowPlaying;

export async function addMovieListElements()  {
    // Clean app element
    const appElement = getElementByIdFrom("app", "addMovieListElements");
    appElement.innerHTML = "";

    // toolbar
    addToolbar();
    addGridLayoutClickListener();
    addListLayoutClickListener();
    addSelectChangeListener();
    
    // Data
    const moviesData = await getMovieListData(currentMovieListType);
    showContent(filterMoviesData(moviesData));

    // ForEach con los movie data
    // crear un element y añadirlo a appElement
}

export function setCurrentMovieListType(movieListType: MovieListType) {
    currentMovieListType = movieListType;
    addMovieListElements();
}

// export function cardCreator() {
//   const element = document.getElementById("app");
//   let cardDiv = document.createElement("div");
//   cardDiv.innerHTML;
//   // element?.appendChild(cardDiv)
//   // cardDiv.classList.add("card")
// }

/**
 * container
 * row
 * 
 * 
 * 
 * col-lg-3 col-md-4 col-sm-6
 */
