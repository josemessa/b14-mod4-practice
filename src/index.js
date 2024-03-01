// scss
import "./scss/styles.scss";

// typescript
import "./ts/api.js";
import { getMovieListData } from "./ts/api.js";
import { movieListType } from "./ts/api.js";

getMovieListData(movieListType.popular, 3)
  .then((movies) => {
    console.log(movies);
  })
  .catch((error) => {
    console.error(error.message);
  });
