export const GuardarEnStorage = (clave,elemento) => {//peli es el parametro que le estamos pasando a la funcion
    

    //conseguir los elementos del localstorage
    let elementos = JSON.parse(localStorage.getItem(clave));

    //comprobar si es un array

    if (Array.isArray(elementos)) {
      //añadir dentro del array un elemento nuevo
      elementos.push(elemento);
      
    } else {
      //crear un array con la peli nueva
   
      elementos = [elemento];
    }

    //guardar en el localstorage

    localStorage.setItem(clave, JSON.stringify(elementos));

    //devolver objecto

    return elemento;
  }