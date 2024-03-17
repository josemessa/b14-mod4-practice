// scss
import "../scss/styles.scss";
import { fetchMovieListData, getMovieDetailUrl, getMovieDetailsData, searchMovie } from "./api/api";
import { addMovieGridElements, showMovieList } from "./movie/movie-list";
import { showDetail } from "./movie/moviedetail";

// typescript
showMovieList();

