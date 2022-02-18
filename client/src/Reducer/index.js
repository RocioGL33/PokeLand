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
      if (typeFilter.length <= 0) {
        alert("Sorry, no pokemon found with this type");
        typeFilter = allPokemons;
      }
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
    case "ORDER_BY":
      let sortedPokes;
      switch (action.payload) {
        case "ASC":
          sortedPokes = state.pokemons.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          });
          break;
        case "DESC":
          sortedPokes = state.pokemons.sort(function (a, b) {
            if (a.name > b.name) {
              return -1;
            }
            if (b.name > a.name) {
              return 1;
            }
            return 0;
          });
          break;
        case "high":
          sortedPokes = state.pokemons.sort(function (a, b) {
            if (a.attack > b.attack) {
              return 1;
            }
            if (b.attack > a.attack) {
              return -1;
            }
            return 0;
          });
          break;
        case "low":
          sortedPokes = state.pokemons.sort(function (a, b) {
            if (a.attack > b.attack) {
              return -1;
            }
            if (b.attack > a.attack) {
              return 1;
            }
            return 0;
          });
          break;
        default:
          return (sortedPokes = state.pokemons);
      }
      return { ...state, pokemons: sortedPokes };

    default:
      return state;
  }
}
