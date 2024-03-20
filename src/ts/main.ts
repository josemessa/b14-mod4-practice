// scss
import "../scss/styles.scss";
import {
  fetchMovieListData,
  getMovieDetailUrl,

  searchMovie,
} from "./api/api";
import { addMovieGridElements, showMovieList } from "./movie/movie-list";
import { getMovieDetailsData, showDetail } from "./movie/movie-detail";
import { filterDetailsData } from "./mappers/mappers";
import { addCoverEventListener } from "./events/events";
import { addToolbar } from "./movie/toolbars";

// typescript
addToolbar()
showMovieList();




