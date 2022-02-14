/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  filterPokeByAttack,
  filterOrigin,
  filterPokeByType,
  getTypes,
  orderByName,
} from "../Actions";

export default function NavBar({ setCurrentPage, setOrder, setAttack }) {
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

  function handleFilterAttack(e) {
    e.preventDefault();
    dispatch(filterPokeByAttack(e.target.value));
    setCurrentPage(1);
    setAttack(`ordenado por attack, ${e.target.value}`);
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`ordenado, ${e.target.value}`);
  }

  return (
    <div>
      <Link to="/create">
        <button>Create your own Pokemon</button>
      </Link>
      <Link to="/">
        <button>Back to Start</button>
      </Link>
      <Link to="/home">
        <button>Back to Home</button>
      </Link>
      <button
        onClick={(e) => {
          handleOnClick(e);
        }}
      >
        Reload Pokemons
      </button>
      <select onChange={(e) => handleSort(e)}>
        <option value="ASC">A-Z</option>
        <option value="DESC">Z-A</option>
      </select>
      <select onChange={(e) => handleFilterAttack(e)}>
        <option value="high">Low</option>
        <option value="low">High</option>
      </select>
      <select onChange={(e) => handleFilteredType(e)}>
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
        <option value="All">All</option>
        <option value="Api">From API</option>
        <option value="Db">From DB</option>
      </select>
    </div>
  );
}
