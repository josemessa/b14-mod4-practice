import { addGridLayoutClickListener } from "../events/events"
import { getElementByIdFrom } from "../utils/utils"
import { showMovieSearch } from "./movie-list"

// esta funcion tiene que ir en el movie list

export async function showMovieSearch() {
    // Clean app element
    const appElement = getElementByIdFrom("app", "addMovieListElements");
    appElement.innerHTML = "";
  
    // toolbar
    addGridLayoutClickListener();
    addListLayoutClickListener();
  
    // Data
    const moviesData = await getMovieSearchData('batman', 1);
    movieListData = filterMoviesData(moviesData);
    console.log(movieListData);
  
    if (currentMovieListLayout === MovieListLayout.Grid) {
      addMovieGridElements();
    } else if (currentMovieListLayout === MovieListLayout.List) {
      addMovieListElements();
    }
  }

// evento
  export let query : string=""

export function addSearchListener(){
  const button= getElementByIdFrom("search-button", "addSearchListener")
  button.addEventListener("click", (event)=>{
    const input= document.getElementById("search-input") as HTMLElement
    query= input.value    
    showMovieSearch()
  })
}


