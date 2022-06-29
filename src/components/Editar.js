import React from 'react'

export const Editar = ({peli, conseguirPeliculas,setEditar,setListadoState}) => {
    const titulo_componente="Editar pelicula";
    const guardarEdicion =(e,id) =>{
        e.preventDefault();

        //conseguir el target del evento
        let target = e.target;

        //buscar el indice del objecto de la pelicula a actualizar 
        const pelis_alamacenadas =conseguirPeliculas();
        const indice = pelis_alamacenadas.findIndex(peli => peli.id === id); //obtiene el indice del objecto

        //crear objecto con ese id de ese  indice, con titulo y descripcion del formulario

        let peli_actualizada ={
            id,
            titulo:target.titulo.value,
            descripcion:target.descripcion.value
        }

         //actulizar el elemento con ese indice
         pelis_alamacenadas[indice] = peli_actualizada;

         //guardar el nuevo array de objectos en el localstorage
         localStorage.setItem("pelis",JSON.stringify(pelis_alamacenadas));

         //actualizar estados

         setListadoState(pelis_alamacenadas);
         setEditar(0); //para que cierre el formulario
    }
  return (
    <div className='edit_form'>
        <h3 className='title'>{titulo_componente}</h3>

        <form onSubmit={e => guardarEdicion(e , peli.id)}>
            <input type="text" name="titulo" className='titulo_editado' defaultValue={peli.titulo}/>

            <textarea name='descripcion' className='descripcion_editada' defaultValue={peli.descripcion} />
            <input type="submit" className='editar' value="Actualizar"/>

        </form>
    </div>
  )
}
