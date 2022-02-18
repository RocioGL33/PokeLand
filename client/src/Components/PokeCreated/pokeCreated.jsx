import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postPokemon, getTypes } from "../../Actions";
import { useDispatch, useSelector } from "react-redux";
import "./pokeCreated.css";

const validate = {
  name: {
    condition: (name) => !!name,
    message: "This input cannot be empty, please insert a name",
  },
  attack: {
    condition: (attack) => attack && attack > 0 && attack <= 1400,
    message: "Please insert a number from 0 to 1400",
  },
  hp: {
    condition: (hp) => hp && hp > 0 && hp <= 500,
    message: "Please insert a number from 0 to 1400",
  },
  defense: {
    condition: (defense) => defense && defense > 0 && defense <= 500,
    message: "Please insert a number from 0 to 500",
  },
  height: {
    condition: (height) => height && height > 0 && height <= 200,
    message: "Please insert a number from 0 to 200",
  },
  weight: {
    condition: (weight) => weight && weight > 0 && weight <= 200,
    message: "Please insert a number from 0 to 200",
  },
  speed: {
    condition: (speed) => speed && speed > 0 && speed <= 200,
    message: "Please insert a number from 0 to 200",
  },
  img: {
    condition: (img) => img,
    message: "Please insert an image representative to your Pokemon",
  },
  types: {
    condition: (types) => types.length,
    message: "This field cannot be empty, please insert at least one type ",
  },
};

export default function PokeCreated() {
  const dispatch = useDispatch();

  const types = useSelector((state) => state.pokeTypes);

  useEffect(() => {
    dispatch(getTypes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let [errors, setErrors] = useState({});
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
    let field = e.target.name;
    let value = e.target.value;
    let isValid = validate[field].condition;
    let message = validate[field].message;
    setInput({
      ...input,
      [field]: value,
    });

    setErrors({
      ...errors,
      [field]: isValid(value) ? "" : message,
    });
    //console.log(input);
    console.log(errors);
  }

  function handleSelect(e) {
    let field = e.target.name;
    let value = e.target.value;
    let isValid = validate[field].condition;
    let message = validate[field].message;
    setInput({
      ...input,
      types: [...input.types, { name: value }],
    });

    setErrors({
      ...errors,
      [field]: isValid(value) ? "" : message,
    });

    // console.log(input);
  }

  function handleDelete(type) {
    setInput({
      ...input,
      types: input.types.filter((t) => t !== type),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(validate);
    console.log("name :", validate.name.condition(input.name));
    console.log(input.name);
    if (
      validate.name.condition(input.name) &&
      validate.hp.condition(input.hp) &&
      validate.attack.condition(input.attack) &&
      validate.defense.condition(input.defense) &&
      validate.speed.condition(input.speed) &&
      validate.height.condition(input.height) &&
      validate.weight.condition(input.weight) &&
      validate.img.condition(input.img) &&
      validate.types.condition(input.types)
    ) {
      dispatch(postPokemon(input));
      alert(
        "Your new Pokemon was created successfully and is waiting for you. Now you can go to Home Page to see it"
      );
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
    } else {
      alert("Please complete all fields");
    }
  }

  return (
    <div className="container-form">
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
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="hp">Hp</label>
          <input
            type="number"
            value={input.hp}
            key="hp"
            name="hp"
            onChange={(e) => handleOnChange(e)}
          ></input>
          {errors.hp && <p>{errors.hp}</p>}
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
          {errors.attack && <p>{errors.attack}</p>}
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
          {errors.defense && <p>{errors.defense}</p>}
        </div>
        <div>
          <label htmlFor="height">Height</label>
          <input
            type="number"
            value={input.height}
            key="height"
            name="height"
            onChange={(e) => handleOnChange(e)}
          ></input>
          {errors.height && <p>{errors.height}</p>}
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
          {errors.weight && <p>{errors.weight}</p>}
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
          {errors.speed && <p>{errors.speed}</p>}
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
          {errors.img && <p>{errors.img}</p>}
        </div>
        <div>
          <label htmlFor="types">Select Types</label>
          <select onChange={(e) => handleSelect(e)} name="types">
            {types?.map((type) => {
              return (
                <option key={type.name} value={type.name} name={type.name}>
                  {type.name}
                </option>
              );
            })}
          </select>
          {errors.types && <p>{errors.types}</p>}
          {input.types.map((type) => (
            <div>
              <p>{type.name}</p>
              <button type="button" onClick={() => handleDelete(type)}>
                Delete
              </button>
            </div>
          ))}
        </div>
        <button className="button-create" type="submit">
          Create Pokemon
        </button>
      </form>
      <div className="container-button-home">
        <Link to="/home">
          <button className="button-home">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
