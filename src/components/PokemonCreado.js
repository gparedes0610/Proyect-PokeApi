import React from "react";

function PokemonCreado({ pokemon }) {
  console.log("estoy en ", pokemon);
  return (
    <div className="h-auto">
      <div className=" flex flex-col items-center bg-white p-4 uppercase rounded-md ">
        <img
          src={pokemon.url}
          alt="imagen del pokemon"
          className="w-1/2 mb-2 "
        />
        <div className=" w-4/6 font-semibold">
          <p className="text-blue-500">Nombre: {pokemon.nombre}</p>
          <p className="text-green-500">Descripcion: {pokemon.descripcion}</p>
          <p className="text-gray-600">Habilidades: {pokemon.habilidades}</p>
        </div>
      </div>
    </div>
  );
}

export default PokemonCreado;
