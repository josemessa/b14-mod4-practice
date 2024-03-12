// control de eventos
export function addGridLayoutClickListener(){
    const elementSvg= document.getElementById('grid-display')
    elementSvg?.addEventListener("click", eventHandlerGrid )
}

export function addListLayoutClickListener(){
    const elementSvg= document.getElementById('list-display')
    elementSvg?.addEventListener("click", eventHandlerList )
}
export const eventHandlerGrid= function(){
    console.log('funciona event grid')
}
export const eventHandlerList= function(){
    console.log('funciona event list')
}

export function addSelectChangeListener(){
    const element= document.getElementById('movie-type-select')
    


}
