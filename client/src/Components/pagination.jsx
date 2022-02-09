import React from "react";

export default function Pagination({ pokePerPage, allPokemons, pagination }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allPokemons / pokePerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <div>
        {pageNumbers &&
          pageNumbers.map((n) => (
            <div key={n}>
              <button onClick={() => pagination(n)}>{n}</button>
            </div>
          ))}
      </div>
    </nav>
  );
}

// pag 1: 0---------9 <- En realidad slice llega hasta la posicion 5 teniendo en cuenta que 0 es un pokemon
// pag 2: 10--------20
// pag 3: 21--------30
