import React, { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

export const Crear = ({setListadoState}) => {
  const tituloComponente = "Añadir pelicula";
  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: "",
  });
  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = (e) => {
    e.preventDefault(); //evita que se recarge toda la pagina al hace el envio de un formulario

    //conseguir datos del formulario
    let datos = e.target;
    let titulo = datos.titulo.value;
    let descripcion = datos.descripcion.value;

    //crear objecto de la pelicula a guardar

    let peli = {
      id: new Date().getTime(), //lo guardamos asi para que guarde distintos numeros aleatorios
      titulo,
      descripcion,
    };

    //guardar estado
    setPeliState(peli);

     //actualizar estado del listado principal
     setListadoState (elemento=> {
      return [...elemento,peli];
    });

    //guardar en el almacenamiento local
    GuardarEnStorage("pelis",peli);
  };
  

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
      <strong>
        {titulo && descripcion && "Has creado la pelicula " + titulo}
      </strong>

      <form onSubmit={conseguirDatosForm}>
        <input type="text" id="titulo" name="titulo" placeholder="Titulo" />
        <textarea
          id="descripcion"
          name="descripcion"
          placeholder="Descripción"
        ></textarea>
        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
};
