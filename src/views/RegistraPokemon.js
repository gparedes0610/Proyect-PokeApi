import React, { useState, useEffect } from "react";
import Formulario from "../components/Formulario";
import PokemonCreado from "../components/PokemonCreado";

function RegistraPokemon() {
  //pokemones en localstorage
  let pokemonesIniciales = JSON.parse(localStorage.getItem("pokemones"));
  if (!pokemonesIniciales) {
    pokemonesIniciales = [];
  }
  //arreglo pokemones
  const [pokemones, guardarPokemones] = useState(pokemonesIniciales);
  //use effect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    let pokemonesIniciales = JSON.parse(localStorage.getItem("pokemones"));

    if (pokemonesIniciales) {
      localStorage.setItem("pokemones", JSON.stringify(pokemones));
    } else {
      localStorage.setItem("pokemones", JSON.stringify([]));
    }
  }, [pokemones]);

  //funcion q tome los pokemones actuales y agrege las nuevas
  const crearPokemon = (pokemon) => {
    guardarPokemones([...pokemones, pokemon]);
  };
  return (
    <div className="pt-28 pb-0 md:pb-96">
      <h2 className="text-4xl text-center font-semibold uppercase text-stone-200 ">
        Registra tu pokemon!
      </h2>
      <hr className="py-2 my-2 w-1/3 mx-auto" />
      <div className="h-auto">
        <div className="container mx-auto flex flex-col items-center md:items-start md:flex-row ">
          <div className="w-full md:w-1/2 px-2">
            <Formulario crearPokemon={crearPokemon} />
          </div>

          <div className="w-full md:w-1/2  grid grid-cols-1 gap-4 px-2 md:grid-cols-2 mt-8 mb-8 md:mt-0">
            {" "}
            {pokemones.length > 0 ? (
              pokemones.map((pokemon, i) => (
                <PokemonCreado key={i} pokemon={pokemon} />
              ))
            ) : (
              <p className="uppercase text-center">
                No existe pokemones creados, por favor cree uno
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistraPokemon;
