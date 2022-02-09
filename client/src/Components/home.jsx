/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Card from "./card";
import NavBar from "./navBar";
import { getPokemons } from "../Actions";

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div>
      <NavBar />
      {allPokemons &&
        allPokemons.map((p) => {
          return <Card id={p.id} name={p.name} img={p.img} types={p.types} />;
        })}
    </div>
  );
}
