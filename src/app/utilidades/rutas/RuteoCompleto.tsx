import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Principal } from "../../vistas/publicas/Principal";
import { InicioSesion } from "../../vistas/publicas/InicioSesion";
import { RegistroSesion } from "../../vistas/publicas/RegistroSesion";
import { NoEncontrado } from "../../vistas/compartidas/NoEncontrado";


  /*Ruteo perezoso, los lazy son componentes que solo se cargan si el usuario lo pide, todos los componenetes lazy deben empezar con la primera en mayusculas */


const LazyPrincipal = lazy(() =>
  import("../../vistas/publicas/Principal")
  .then(() => ({ default: Principal }))
);

const LazyInicioSesion = lazy(() =>
  import("../../vistas/publicas/InicioSesion")
  .then(() => ({ default: InicioSesion }))
);

const LazyRegistroSesion = lazy(() =>
  import("../../vistas/publicas/RegistroSesion")
  .then(() => ({ default: RegistroSesion }))
);

const LazyNoEncontrado = lazy(() =>
  import("../../vistas/compartidas/NoEncontrado")
  .then(() => ({ default: NoEncontrado }))
);

export const RuteoCompleto = () => {
  return (
    <Routes>
      <Route path="/" element={<LazyPrincipal/>} />
      <Route path="/login" element={<LazyInicioSesion/>} />
      <Route path="/Registro" element={<LazyRegistroSesion/>} />
      <Route path="*" element={<LazyNoEncontrado/>} />
    </Routes>
  );
};
