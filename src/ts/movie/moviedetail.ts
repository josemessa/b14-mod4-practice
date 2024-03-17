import { getMovieDetailsData } from "../api/api";
import { movieID } from "../events/events";
import { filterMoviesData } from "../mappers/mappers";
import { getElementByIdFrom } from "../utils/utils";
import { addBackToolbar } from "./toolbars";

export async function showDetail(movieID) {
    // Clean app element
    const appElement = getElementByIdFrom("app", "addMovieListElements");
    appElement.innerHTML = "";

    addBackToolbar()

// Data
    const moviesData = await getMovieDetailsData(movieID);
    let movieDetailData = filterMoviesData(moviesData);
    console.log(movieDetailData)
    
}