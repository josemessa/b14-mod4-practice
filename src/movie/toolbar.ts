

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
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Now Playing</a></li>
        <li><a class="dropdown-item" href="#">Most Popular</a></li>
        <li><a class="dropdown-item" href="#">Top rated</a></li>
        <li><a class="dropdown-item" href="#">Upcoming</a></li>
      </ul>
    </div>
    </div>`

  appElement.appendChild(elementContent)

}



