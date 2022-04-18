import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

function Detalle() {
  const { id } = useParams();
  //console.log(id);
  const [pokeDetalle, setPokeDetalle] = useState(null);
  const pokemonPorId = async () => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const resul = await resp.json();
    setPokeDetalle(resul);
  };
  useEffect(() => {
    pokemonPorId();
  }, []);
  if (!pokeDetalle) {
    return null;
  }
  return (
    <div className="h-screen pt-32 px-4">
      <div className="w-full sm:w-3/6 mx-auto">
        <div className=" bg-white rounded-md ">
          <div className="flex flex-col md:flex-row md:justify-around px-4">
            <img
              src={pokeDetalle.sprites.front_default}
              alt=""
              className="w-full md:w-1/2 "
            />

            <div className="flex flex-col justify-center">
              <p className="text-gray-700 text-2xl font-semibold uppercase">
                Nombre : {pokeDetalle.name}
              </p>
              <p className="text-green-700 text-xl font-semibold uppercase">
                Vida : {pokeDetalle.stats[0].base_stat}
              </p>
              <p className="text-red-700 text-xl font-semibold uppercase">
                Ataque : {pokeDetalle.stats[1].base_stat}
              </p>
              <p className="text-blue-500 text-xl font-semibold uppercase">
                Defensa : {pokeDetalle.stats[2].base_stat}
              </p>
              <p className="text-gray-500 text-xl font-semibold uppercase">
                Velocidad : {pokeDetalle.stats[5].base_stat}
              </p>
            </div>
          </div>

          <div className="py-8 pl-4">
            <NavLink
              to="/"
              className="bg-purple-600 px-4 py-2 rounded-md font-semibold duration-300 hover:bg-purple-500"
            >
              👈 Regresar
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detalle;
