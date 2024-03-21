export function getElementByIdFrom (
  id: string,
  functionName: string
): HTMLElement {
  const element = document.getElementById(id);

  if (element === null)
    throw new Error(`Error(${functionName}): element id '${id}' not found.`);

  return element;
}

// funcion para mostrar lista en la pantalla 

export function showContent(content: unknown): void {
  const appElement = document.getElementById("app");
  let newDiv= document.createElement("div") 
  appElement?.appendChild(newDiv)
  if (newDiv !== null) {
    newDiv.innerHTML= `<pre>${JSON.stringify(
      content,
      undefined,
      2
    )}</pre>`;
  }
}


