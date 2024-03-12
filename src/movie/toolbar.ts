

export function addToolbar(){
    const appElement : any  = document.getElementById('app')
    const elementContent= document.createElement('div')

    elementContent.innerHTML=`<div class="container d-flex justify-content-between align-items-center">
    <ul id="second-nav" class="nav">
      <li class="nav-item">
        <a class="nav-link active" id="grid-display" aria-current="page" href="#"
          ><img src="grid-icon.svg" alt=""></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="list-display" href="#"
          ><img src="list-icon.svg" alt=""></a>
      </li>
    </ul>
    </div>
    <div>
    <select
    id="movie-type-select"
    class="form-select w-25"
    aria-label="Movie list type"
  >
    <option selected value="now_playing">En cartelera</option>
    <option value="popular">Popular</option>
    <option value="top_rated">Mejor valoradas</option>
    <option value="upcoming">Próximamente</option>
  </select>
    </div>`

  appElement.appendChild(elementContent)

}



