// scss
import "./scss/styles.scss";

// typescript
import "./ts/api.ts";
import { getMovieListData, searchMovie } from "./ts/api.js";
import { movieListType } from "./ts/api-config.ts";
import { addToolbar } from "./movie/toolbar.ts";
import{ getElementByIdFrom, showContent } from "./utils/utils.ts"
import{ addGridLayoutClickListener, addListLayoutClickListener, addSelectChangeListener } from "./ts/events.ts" 


// getMovieListData(movieListType.popular, 1)
//   .then((movies) => {
//     showContent(movies);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

searchMovie('loco')
.then(resultMovies => { showContent(resultMovies)})
.catch(error=> {console.error(error.message);})

addToolbar();
addGridLayoutClickListener()
addListLayoutClickListener()
addSelectChangeListener()
