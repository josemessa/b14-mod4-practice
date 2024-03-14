export function addToolbar(){
    const appElement : any  = document.getElementById('app')
    const elementContent= document.createElement('div')

    elementContent.innerHTML=`<div class="container d-flex justify-content-between align-items-center">
    <div><button class=" border border-0 bg-transparent " id="grid-display"><img src="grid-icon.svg" alt="">
    </button><button class=" border border-0 bg-transparent" id="list-display"><img src="list-icon.svg" alt=""></button> </div>
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
    </div>`

  appElement.appendChild(elementContent)
}



