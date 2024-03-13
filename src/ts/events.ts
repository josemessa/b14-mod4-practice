// control de eventos
export function addGridLayoutClickListener(){
    const elementGrid= document.getElementById('grid-display')
    elementGrid?.addEventListener("click", function(){
        console.log('funciona event grid')} )
}

export function addListLayoutClickListener(){
    const elementList= document.getElementById('list-display')
    elementList?.addEventListener("click", function(){
        console.log('funciona event list')
    })
}

export function addSelectChangeListener() {
    const elementSelect = document.getElementById('movie-type-select');
    
    if (elementSelect) {
        elementSelect.addEventListener("change", function() {
            const optionSelected = elementSelect.value;
            console.log(optionSelected);
        });
    }
}