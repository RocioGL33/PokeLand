/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  filterOrigin,
  filterPokeByType,
  getTypes,
  orderBy,
} from "../../Actions";
import SearchBar from "../SearchBar/searchBar";
import "./navBar.css";

export default function NavBar({ setCurrentPage, setOrder }) {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokeTypes);
  //console.log(types);
  // eslint-disable-next-line no-unused-vars

  useEffect(() => {
    dispatch(getPokemons());
  }, []);
  useEffect(() => {
    dispatch(getTypes());
  }, []);
  function handleOnClick(e) {
    e.preventDefault();
    dispatch(getPokemons());
  }

  function handleFilteredType(e) {
    e.preventDefault();
    dispatch(filterPokeByType(e.target.value));
    setCurrentPage(1);
  }

  function handleFilteredOrigin(e) {
    dispatch(filterOrigin(e.target.value));
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderBy(e.target.value));
    setCurrentPage(1);
    setOrder(`ordenado, ${e.target.value}`);
  }

  return (
    <div className="container-gf">
      <div className="search-bar-child">
        <SearchBar />
      </div>
      <div className="container-nav-father">
        <div className="selectors-child">
          <Link to="/create">
            <button>Create your own Pokemon</button>
          </Link>
          <Link to="/">
            <button>Back to Start</button>
          </Link>

          <button
            onClick={(e) => {
              handleOnClick(e);
            }}
          >
            Reload Pokemons
          </button>
          <select onChange={(e) => handleSort(e)}>
            <option value="order" disabled>
              order by:
            </option>
            <option value="ASC">A-Z</option>
            <option value="DESC">Z-A</option>
            <option value="high">Low attack</option>
            <option value="low">High attack</option>
          </select>

          <select onChange={(e) => handleFilteredType(e)}>
            <option value="type" disabled>
              filter by type:
            </option>
            <option value="All">All</option>
            {types?.map((t) => {
              return (
                <option key={t.id} value={t.name}>
                  {t.name}
                </option>
              );
            })}
          </select>
          <select onChange={(e) => handleFilteredOrigin(e)}>
            <option value="origin" disabled>
              order by origin:
            </option>
            <option value="All">All</option>
            <option value="Api">From API</option>
            <option value="Db">From DB</option>
          </select>
        </div>
      </div>
    </div>
  );
}
