import Movies from "./Movies";
import moviesJson from "./movies.json";
import "./App.css";
import { useState } from "react";
import PageWrapper from "./PageWrapper";
import Paginacion from "./Paginacion";

function App() {
  const [paginaActual, setPaginaActual] = useState(1);
  const TOTAL_POR_PAGINA = 7;

  let movies = moviesJson;

  const cargarPeliculas = () => {
    movies = movies.slice(
      (paginaActual - 1) * TOTAL_POR_PAGINA,
      paginaActual * TOTAL_POR_PAGINA
    );
  };

  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = moviesJson.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  };

  cargarPeliculas();

  return (
    <PageWrapper>
      {movies.map((pelicula) => (
        <Movies
          titulo={pelicula.titulo}
          calificacion={pelicula.calificacion}
          director={pelicula.director}
          actores={pelicula.actores}
          fecha={pelicula.fecha}
          duracion={pelicula.duracion}
          img={pelicula.img}
        >
          {pelicula.descripcion}
        </Movies>
      ))}

      <Paginacion
        pagina={paginaActual}
        total={getTotalPaginas()}
        onChange={(pagina) => {
          setPaginaActual(pagina);
        }}
      />
    </PageWrapper>
  );
}

export default App;
