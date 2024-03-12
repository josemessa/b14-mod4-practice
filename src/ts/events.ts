// control de eventos
export function addGridLayoutClickListener(){
    const elementSvg= document.getElementById('grid-display')
    elementSvg?.addEventListener("click", function(){
        console.log('funciona event grid')} )
}

export function addListLayoutClickListener(){
    const elementSvg= document.getElementById('list-display')
    elementSvg?.addEventListener("click", function(){
        console.log('funciona event list')
    })
}

export function addSelectChangeListener() {
    const element = document.getElementById('movie-type-select');
    
    if (element) {
        element.addEventListener("change", function() {
            const optionSelected = element.value;
            console.log(optionSelected);
        });
    }
}