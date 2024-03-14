export function getElementByIdFrom(
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
  if (appElement !== null) {
    appElement.innerHTML += `<pre>${JSON.stringify(
      content,
      undefined,
      2
    )}</pre>`;
  }
}


// funcion para hacer el fetch de las url y traer datos
export async function fetchData( url, functionName){
  const response = await fetch(url);
  const data = await response.json();

  if (data?.success === false) {
    throw new Error(`error${functionName}): ${data.status_message} `);
  }
  return data?.results ?? [];

}