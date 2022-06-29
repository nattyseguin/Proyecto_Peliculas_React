import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {
  const [listadoState, setListadoState]= useState([]);
  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>

        <h1>Natalia Peliculas</h1>
      </header>

      <nav className="nav">
        <ul>
          <li>
            <a href="/#">Inicio</a>
          </li>
          <li>
            <a href="/#">Peliculas</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Contacto</a>
          </li>
        </ul>
      </nav>

      <section id="content" className="content">
        {/*aqui va el listado de peliculas */}
        <Listado listadoState={listadoState} setListadoState={setListadoState}/>
      </section>

      <aside className="lateral">
        <Buscador  listadoState={listadoState} setListadoState={setListadoState} />
        <Crear setListadoState={setListadoState}/>
      </aside>

      <footer className="footer">&copy; Natalia Seguin</footer>
    </div>
  );
}

export default App;
