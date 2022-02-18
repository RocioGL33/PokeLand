/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail } from "../../Actions";
import "./detail.css";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPokemonDetail(id));
  }, []);

  const detail = useSelector((state) => state.pokemonDetail);

  return (
    <>
      <div className="container-detail-f">
        <div className="container-detail-child">
          <h2>{detail.name}</h2>
          <div>
            <label>Types:</label>
            {detail.types?.map((type) => (
              <h3>{type}</h3>
            ))}
          </div>
          <img
            src={detail.img}
            alt="img not found"
            style={{ width: "200px" }}
          />

          <div className="detail-card">
            <h4> ID: {detail.id}</h4>
            <h4> Hp: {detail.hp}</h4>
            <h4> Height: {detail.height}</h4>
            <h4> Weight: {detail.weight}</h4>
            <h4> Attack: {detail.attack}</h4>
            <h4> Defense: {detail.defense}</h4>
            <h4> Speed: {detail.speed}</h4>
          </div>
        </div>
      </div>
      <div className="container-button-detail">
        <Link to="/home">
          <button className="detail-button">Back to home</button>
        </Link>
      </div>
    </>
  );
}
