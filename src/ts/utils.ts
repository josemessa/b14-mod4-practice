export function getElementByIdFrom(
    id: string,
    functionName: string
  ): HTMLElement {
    const element = document.getElementById(id);
   
    if (element === null)
      throw new Error(`Error(${functionName}): element id '${id}' not found.`);
   
    return element;
  }