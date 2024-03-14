import { getMovieListData } from "../api/api";
import { apiConfig } from "../api/api-config";
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
    let moviesData = await getMovieListData(currentMovieListType);
    moviesData= filterMoviesData(moviesData);

    // ForEach con los movie data
    // crear un element y añadirlo a appElement
    const container= document.createElement("div")
    container.classList.add("container")

    const row= document.createElement("div")
    row.classList.add("row")

    appElement.appendChild(container)
    container.appendChild(row)
    
    moviesData.forEach( movie =>{

       const card= document.createElement("div")
       const column= document.createElement("div")
       column.classList.add("col-lg-3 col-md-4 col-sm-6")     
       
    })
}

export function setCurrentMovieListType(movieListType: MovieListType) {
    currentMovieListType = movieListType;
    addMovieListElements();
}



/**
 * container
 * row
 * 
 * 
 * 
 * col-lg-3 col-md-4 col-sm-6
 */
