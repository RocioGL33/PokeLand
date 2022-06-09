import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export default function Card({ id, name, img, types }) {
  return (
    <div className="card">
      <Link to={`/pokemons/${id}`}>
        <h1>{name}</h1>
        <img src={img} alt="img not found" style={{ width: "120px" }} />
      </Link>
      {types?.map((type) => (
        <h2 key={type.name}>{type.name}</h2>
      ))}
    </div>
  );
}
