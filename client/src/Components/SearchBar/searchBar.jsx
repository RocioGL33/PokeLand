import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../Actions";
import "./searchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getPokemonByName(name));
    setName("");
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search Pokemon"
        onChange={(e) => handleChange(e)}
        className="input-search-bar"
      ></input>
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Search
      </button>
    </>
  );
}
