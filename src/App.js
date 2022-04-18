import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pokemones from "./components/Pokemones";
import Sidebar from "./views/Sidebar";
import "./index.css";
import Detalle from "./components/Detalle";
import RegistraPokemon from "./views/RegistraPokemon";

function App() {
  return (
    <Router>
      <div className="bg-indigo-600 w-full h-auto">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Pokemones />} />
          <Route path="/registra-pokemon" element={<RegistraPokemon />} />
          <Route path="/pokemon/:id" element={<Detalle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
