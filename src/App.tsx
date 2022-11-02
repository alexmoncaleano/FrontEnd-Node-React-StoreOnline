import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { RuteoCompleto } from "./app/utilidades/rutas/RuteoCompleto";
import logo from "./../src/assets/image/logouno.png";

const suspenso = (
  <div className="logo d-flex align-items-center w-auto">
    <div className="spinner-grow " role="status">
      <span className="visually-hidden">Loading...</span>
      <br />
      <br />
    </div>
    <img src={logo} alt="" />
  </div>
);
function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={suspenso}>
          <RuteoCompleto />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
