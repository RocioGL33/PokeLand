const initialState = {
  pokemons: [],
  allPokemons: [],
  pokeTypes: [],
  pokemonDetail: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };
    case "GET_POKEMON_DETAIL":
      return { ...state, pokemonDetail: action.payload };
    case "GET_NAME_POKE":
      return { ...state, pokemons: action.payload };
    case "POST_POKE":
      return { ...state };
    case "GET_TYPES":
      return { ...state, pokeTypes: action.payload };
    case "FILTER_BY_TYPE":
      let allPokemons = state.allPokemons;
      let typeFilter =
        action.payload === "All"
          ? allPokemons
          : allPokemons.filter((e) =>
              e.types.find((el) => el.name === action.payload)
            );

      return {
        ...state,
        pokemons: typeFilter,
      };
    case "FILTER_BY_ORIGIN":
      const origin =
        action.payload === "Db"
          ? state.allPokemons.filter((e) => e.created)
          : state.allPokemons.filter((e) => !e.created);
      return {
        ...state,
        pokemons: origin,
      };
    case "ORDER_BY_NAME":
      let sortedPokes =
        action.payload === "ASC"
          ? state.pokemons.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.pokemons.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return { ...state, pokemons: sortedPokes };
    case "ORDER_BY_ATTACK":
      let sortedAttack =
        action.payload === "high"
          ? state.pokemons.sort(function (a, b) {
              if (a.attack > b.attack) {
                return 1;
              }
              if (b.attack > a.attack) {
                return -1;
              }
              return 0;
            })
          : state.pokemons.sort(function (a, b) {
              if (a.attack > b.attack) {
                return -1;
              }
              if (b.attack > a.attack) {
                return 1;
              }
              return 0;
            });
      return { ...state, pokemons: sortedAttack };
    default:
      return state;
  }
}
