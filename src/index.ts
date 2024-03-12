// scss
import "./scss/styles.scss";

// typescript
import "./ts/api.ts";
import { getMovieListData } from "./ts/api.js";
import { movieListType } from "./ts/api.js";
import { addToolbar } from "./movie/toolbar.ts";
import{ getElementByIdFrom } from "./ts/utils.ts"
import{ addGridLayoutClickListener, addListLayoutClickListener, addSelectChangeListener } from "./ts/events.ts" 


getMovieListData(movieListType.popular, 1)
  .then((movies) => {
    console.log(movies);
  })
  .catch((error) => {
    console.error(error.message);
  });


addToolbar();
addGridLayoutClickListener()
addListLayoutClickListener()
addSelectChangeListener()