/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail } from "../Actions";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPokemonDetail(id));
  }, []);

  const detail = useSelector((state) => state.pokemonDetail);

  return (
    <>
      <img src={detail.img} alt="img not found" />

      <h2>{detail.name}</h2>

      {detail.types?.map((type) => (
        <h3>{type.name}</h3>
      ))}
      <div>
        <h4> ID: {detail.id}</h4>
        <h4> Hp: {detail.hp}</h4>
        <h4> Height: {detail.height}</h4>
        <h4> Weight: {detail.weight}</h4>
        <h4> Attack: {detail.attack}</h4>
        <h4> Defense: {detail.defense}</h4>
        <h4> Speed: {detail.speed}</h4>
      </div>
      <Link to="/home">
        <button>Back to home</button>
      </Link>
    </>
  );
}
