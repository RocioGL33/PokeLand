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

export function getPokemonByName(name) {
  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/pokemons?name=" + name);
      return dispatch({ type: "GET_NAME_POKE", payload: json.data });
    } catch (e) {
      console.log(e);
    }
  };
}

export function getTypes() {
  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/types");
      return dispatch({ type: "GET_TYPES", payload: json.data });
    } catch (e) {
      console.log(e);
    }
  };
}

export function postPokemon(payload) {
  return async function (dispatch) {
    let json = await axios.post("http://localhost:3001/pokemons", payload);
    return json;
  };
}
export function filterPokeByAttack(payload) {
  return { type: "ORDER_BY_ATTACK", payload };
}

export function filterPokeByType(payload) {
  //console.log(payload);
  return { type: "FILTER_BY_TYPE", payload };
}

export function filterOrigin(payload) {
  return { type: "FILTER_BY_ORIGIN", payload };
}

export function orderByName(payload) {
  return { type: "ORDER_BY_NAME", payload };
}
