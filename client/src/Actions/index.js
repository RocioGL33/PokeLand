import axios from "axios";

export function getPokemons() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/pokemons");
    return dispatch({
      type: "GET_POKEMONS",
      payload: json.data,
    });
  };
}

export function getPokemonDetail(id) {
  return async function (dispatch) {
    let json = await axios.get(`http://localhost:3001/pokemons/${id}`);
    return dispatch({ type: "GET_POKEMON_DETAIL", payload: json.data });
  };
}
