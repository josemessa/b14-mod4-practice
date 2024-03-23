// scss
import "../scss/styles.scss";
import { addSearchListener } from "./events/events";
// funciones
import { showCurrentMode } from "./movie/movie-list";
import { addToolbar } from "./movie/toolbars";

// typescript
addToolbar();
showCurrentMode();
