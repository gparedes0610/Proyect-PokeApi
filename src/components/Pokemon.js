import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Pokemon({ pokemon, i }) {
  const { url } = pokemon;
  const [poke, setPoke] = useState(null);

  const pokemonObtenido = async () => {
    const resp = await fetch(url);
    const resul = await resp.json();
    setPoke(resul);
  };
  useEffect(() => {
    pokemonObtenido();
  }, []);
  if (!poke) {
    return null;
  }

  return (
    <div className="w-full md:max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={poke.sprites.front_default}
        alt="Sunset in the mountains"
      ></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-slate-100 text-transform: uppercase mb-5">
          {poke.name}
        </div>
        <NavLink
          to={`/pokemon/${poke.id}`}
          className="bg-blue-500 hover:bg-blue-700 duration-300 text-white font-semibold py-2 px-4 rounded-md"
        >
          Ver detalle
        </NavLink>
      </div>
    </div>
  );
}

export default Pokemon;
