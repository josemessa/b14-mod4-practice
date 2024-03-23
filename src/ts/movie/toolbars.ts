import { addBackButtonListener, addSearchListener } from "../events/events";
addSearchListener();

// Funcion que inserta TOOLBAR en el dom
export function addToolbar() {
  const appElement: any = document.getElementById("toolbar");
  const elementContent = document.createElement("div");

  elementContent.innerHTML = `<div class="container mt-4 mb-4 d-flex justify-content-between align-items-center">
    <div ><button class=" border border-secondary me-2 border-radius-1 border-2 bg-warning " id="grid-display"><img src="grid-icon.svg" alt="">
    </button><button class=" border border-2 border-secondary bg-warning" id="list-display"><img src="list-icon.svg" alt=""></button> </div>
  <div>
    <select
    id="movie-type-select"
    class="form-select w-100"
    aria-label="Movie list type"
  >
  //   <option value="now_playing">En cartelera</option>
  //   <option value="popular">Popular</option>
  //   <option value="top_rated">Mejor valoradas</option>
  //   <option value="upcoming">Próximamente</option>
  // </select>
    </div>`;

  appElement.appendChild(elementContent);
}
// Funcion que inserta BACK-TOOLBAR en el dom
export function addBackToolbar() {
  const toolbarElement: any = document.getElementById("toolbar");
  toolbarElement.innerHTML = "";

  const appElement: any = document.getElementById("app");
  const elementContent = document.createElement("div");

  elementContent.innerHTML = ` <div class="container  mt-2 mb-2 align-items-center">
  <div class=""><button class=" border border-2 d-flex align-items-center p-1 border-secondary bg-warning" id="back-button"><img src="back.svg" alt=""><h2 class="fs-5 ">  Volver atras</h2>
  </button></div>
  
</div>`;

  appElement.appendChild(elementContent);
  addBackButtonListener();
}
