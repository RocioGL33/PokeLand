/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../Actions";

export default function NavBar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  function handleOnClick(e) {
    e.preventDefault();
    dispatch(getPokemons());
  }

  return (
    <div>
      <Link to="/pokeCreated">Create your own Pokemon</Link>
      <Link to="/">Back to Start</Link>
      <button
        onClick={(e) => {
          handleOnClick(e);
        }}
      >
        Reload Pokemons
      </button>

      <select>
        <option value="ASC">A-Z</option>
        <option value="DESC">Z-A</option>
      </select>
      <select>
        <option value="types">Types</option>
      </select>
      <select>
        <option value="All">All</option>
        <option value="Api">From API</option>
        <option value="DB">From DB</option>
      </select>
    </div>
  );
}
