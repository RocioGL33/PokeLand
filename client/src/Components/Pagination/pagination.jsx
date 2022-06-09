import React from "react";
import "./pagination.css";

export default function Pagination({ pokePerPage, allPokemons, pagination }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allPokemons / pokePerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="container-numbers">
      {pageNumbers &&
        pageNumbers.map((n) => (
          <button
            key={n}
            className="number-buttons"
            onClick={() => pagination(n)}
          >
            {n}
          </button>
        ))}
    </div>
  );
}

// pag 1: 0---------11 <- En realidad slice llega hasta la posicion 11 teniendo en cuenta que 0 es un pokemon
