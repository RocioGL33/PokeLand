import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, name, img, types }) {
  return (
    <div>
      <Link to={`/pokemons/${id}`}>
        <h2>{name}</h2>

        {types?.map((type) => (
          <h3>{type.name}</h3>
        ))}
        <img src={img} alt="img not found" />
      </Link>
    </div>
  );
}
