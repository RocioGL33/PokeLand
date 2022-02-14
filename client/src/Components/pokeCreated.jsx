import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postPokemon, getTypes } from "../Actions";
import { useDispatch, useSelector } from "react-redux";

function validation(input) {}

export default function PokeCreated() {
  const dispatch = useDispatch();

  const types = useSelector((state) => state.pokeTypes);

  useEffect(() => {
    dispatch(getTypes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let [input, setInput] = useState({
    name: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
    img: "",
  });

  function handleOnChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  }

  function handleSelect(e) {
    setInput({
      ...input,
      types: [...input.types, { name: e.target.value }],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    dispatch(postPokemon(input));
    alert("Your new Pokemon it's created successfully and is waiting for you");
    setInput({
      name: "",
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
      types: [],
      img: "",
    });
  }

  return (
    <>
      <h3>Create your own Pokemon right here!</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={input.name}
            key="name"
            name="name"
            onChange={(e) => handleOnChange(e)}
          ></input>
        </div>
        <div>
          <label htmlFor="hp">Hp</label>
          <input
            type="number"
            value={input.hp}
            key="hp"
            name="hp"
            min="0"
            max="500"
            onChange={(e) => handleOnChange(e)}
          ></input>
        </div>
        <div>
          <label htmlFor="attack">Attack</label>
          <input
            type="number"
            value={input.attack}
            key="attack"
            name="attack"
            onChange={(e) => handleOnChange(e)}
          ></input>
        </div>
        <div>
          <label htmlFor="defense">Defense</label>
          <input
            type="number"
            value={input.defense}
            key="defense"
            name="defense"
            onChange={(e) => handleOnChange(e)}
          ></input>
        </div>
        <div>
          <label htmlFor="hp">Height</label>
          <input
            type="number"
            value={input.height}
            key="height"
            name="height"
            onChange={(e) => handleOnChange(e)}
          ></input>
        </div>
        <div>
          <label htmlFor="weight">Weight</label>
          <input
            type="number"
            value={input.weight}
            key="weight"
            name="weight"
            onChange={(e) => handleOnChange(e)}
          ></input>
        </div>

        <div>
          <label htmlFor="speed">Speed</label>
          <input
            type="number"
            value={input.speed}
            key="speed"
            name="speed"
            onChange={(e) => handleOnChange(e)}
          ></input>
        </div>
        <div>
          <label htmlFor="img">Image</label>
          <input
            type="text"
            value={input.img}
            key="img"
            name="img"
            onChange={(e) => handleOnChange(e)}
          ></input>
        </div>
        <div>
          <label htmlFor="types">Select Types</label>
          <select onChange={(e) => handleSelect(e)}>
            {types?.map((type) => {
              return (
                <option key={type.name} value={type.name}>
                  {type.name}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit">Create Pokemon</button>
      </form>
      <div>
        <Link to="/home">
          <button>Back to Home</button>
        </Link>
      </div>
    </>
  );
}
