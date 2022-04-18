const URL = "https://pokeapi.co/api/v2/pokemon/";
const ObteniendoPokemones = async () => {
  try {
    const respuesta = await fetch(URL);
    const resultado = await respuesta.json();
    const { results } = resultado;
    // console.log(results);
    return results;
  } catch (error) {
    console.log(error);
  }
};

export default ObteniendoPokemones;
