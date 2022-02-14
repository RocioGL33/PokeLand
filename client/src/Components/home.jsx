/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Card from "./card";
import NavBar from "./navBar";
import SearchBar from "./searchBar";
import Pagination from "./pagination";
import { getPokemons } from "../Actions";

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);

  const [currentPage, setCurrentPage] = useState(1);
  //la pagina actual en la que empiezo el paginado
  const [order, setOrder] = useState("");
  const [attack, setAttack] = useState("");
  const [pokePerPage, setPokePerPage] = useState(12);
  //declaro otro estado local donde especifico la cantidad de pokemons que requiero por pagina y siempre van a ser 9
  const indexOfLastPoke = currentPage * pokePerPage; // si estoy en mi pagina 2 mi ultimo indice va a ser 18
  const indexOfFirstPoke = indexOfLastPoke - pokePerPage; // necesito tener control de mi primer indice por pagina por eso le resto al ultimo indice la cantidad de pokemons por pagina
  const currentPokes = allPokemons.slice(indexOfFirstPoke, indexOfLastPoke);
  //slice toma una porcion que yo le indique de un array y lo porciona renderizando solo los pokemones de esa pagina actual
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <NavBar
        setCurrentPage={setCurrentPage}
        setOrder={setOrder}
        setAttack={setAttack}
      />

      <Pagination
        pokePerPage={pokePerPage}
        allPokemons={allPokemons.length}
        pagination={pagination}
      />

      <SearchBar />
      {currentPokes?.map((p) => {
        return <Card id={p.id} name={p.name} img={p.img} types={p.types} />;
      })}
    </>
  );
}
