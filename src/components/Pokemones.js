import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ObteniendoPokemones from "../apis/PokeApi";
import Pokemon from "./Pokemon";

function Pokemones() {
  const [listadoDePokemones, setListadoDePokemones] = useState([]);
  const [inputPokemon, setInputPokemon] = useState("");

  const [pokemonEncontrado, setPokemonEncontrado] = useState(null);
  const obteniendoTodosLosPokemones = async () => {
    const arregloPokemones = await ObteniendoPokemones();
    setListadoDePokemones(arregloPokemones);
  };

  const getBusqueda = async (input) => {
    try {
      let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
      let result = await resp.json();

      if (input === "") {
        setPokemonEncontrado(null);
      } else {
        setPokemonEncontrado(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obteniendoTodosLosPokemones();
  }, []);

  return (
    <div className="px-4 pt-24 h-auto">
      <div className="flex items-center rounded-md px-4 mx-auto bg-gray-700 text-white w-6/6 p-3.5 my-4 sm:w-6/6 md:w-2/6 lg:w-1/6  ">
        <ion-icon name="search-outline" className="w-full"></ion-icon>
        <input
          type="text"
          className="text-[14px] xl:text-[18px] ml-4 bg-transparent font-semibold focus:outline-none w-full"
          placeholder="Buscar Pokemon..."
          value={inputPokemon}
          onChange={(e) => {
            setInputPokemon(e.target.value);
            getBusqueda(e.target.value);
          }}
        />
      </div>

      <div className="grid grid-cols-1 gap-1  md:grid-cols-4 gap-4 ">
        {!pokemonEncontrado ? (
          listadoDePokemones.map((pokemon, i) => (
            <Pokemon key={i} pokemon={pokemon} i={i} />
          ))
        ) : (
          <>
            <div className="w-full md:max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={pokemonEncontrado.sprites.front_default}
                alt="Sunset in the mountains"
              ></img>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-slate-100 text-transform: uppercase mb-5">
                  {pokemonEncontrado.name}
                </div>
                <NavLink
                  to={`/pokemon/${pokemonEncontrado.id}`}
                  className="bg-blue-500 hover:bg-blue-700 duration-300 text-white font-semibold py-2 px-4 rounded-md"
                >
                  Ver detalle
                </NavLink>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Pokemones;
