import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function Formulario({ crearPokemon }) {
  const [registroPokemon, setRegistroPokemon] = useState({
    url: "",
    nombre: "",
    descripcion: "",
    habilidades: "",
  });
  const { url, nombre, descripcion, habilidades } = registroPokemon;

  const [error, actualizarError] = useState(false);

  const actualizarState = (e) => {
    setRegistroPokemon({
      ...registroPokemon,
      [e.target.name]: e.target.value,
    });
  };
  const submitPokemon = (e) => {
    e.preventDefault();
    if (
      url.trim() === "" ||
      nombre.trim() === "" ||
      descripcion.trim() === "" ||
      habilidades.trim() === ""
    ) {
      actualizarError(true);
      return;
    }
    actualizarError(false);
    //asignamos id
    registroPokemon.id = uuidv4();
    console.log(registroPokemon);
    crearPokemon(registroPokemon);
    setRegistroPokemon({
      url: "",
      nombre: "",
      descripcion: "",
      habilidades: "",
    });
  };

  return (
    <form
      className="w-full max-w-lg shadow-lg p-4 bg-white rounded-md "
      onSubmit={submitPokemon}
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Coloque url del pokemon
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="url del pokemon"
          onChange={actualizarState}
          name="url"
          value={url}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Coloque nombre del pokemon
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="nombre del pokemon"
          onChange={actualizarState}
          name="nombre"
          value={nombre}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Coloque descripcion del pokemon
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="descripcion del pokemon"
          onChange={actualizarState}
          name="descripcion"
          value={descripcion}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Coloque habilidades del pokemon
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="habilidades del pokemon"
          onChange={actualizarState}
          name="habilidades"
          value={habilidades}
        />
      </div>
      <div className="my-2">
        {error ? (
          <p className="bg-red-600 rounded-md p-2 uppercase">
            Todos los campos son obligatorios
          </p>
        ) : null}
      </div>

      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Registrar
          </button>
        </div>
      </div>
    </form>
  );
}

export default Formulario;
