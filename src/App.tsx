import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from "react";
import { RuteoCompleto } from './app/utilidades/rutas/RuteoCompleto';

const suspenso =(
<div className="spinner-grow" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
);
function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={suspenso}>
        <RuteoCompleto/>

        </Suspense>
       

      </BrowserRouter>
    </div>
  );
}

export default App;
