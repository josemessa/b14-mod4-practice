import { getElementByIdFrom } from "../utils/utils";

export async function showMovieList() {
    // Clean app element
    const appElement = getElementByIdFrom("app", "addMovieListElements");
    appElement.innerHTML = "";

    
}