const initialState = {
  pokemons: [],
  pokemonDetail: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
      };
    case "GET_POKEMON_DETAIL":
      return { ...state, pokemonDetail: action.payload };
    default:
      return state;
  }
}
