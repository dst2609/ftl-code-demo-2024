import React, { useState, useEffect } from "react";
import "./PokemonList.css";
//use async function in useEffect to get pokemondata

const PokemonList = () => {
  //useState for pokemons
  const [pokemons, setPokemons] = useState([]);

  // useEffect is react hook
  useEffect(() => {
    //code here
    //fetchPOkemonData from the api
    async function fetchPokemon() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=25"
      );

      //set response to json
      const data = await response.json();
      //   console.log("data is:", data);
      //get the data -> data.results and store in the pokemons array useState.
      setPokemons(data.results);
    }
    fetchPokemon();
  }, []);

  return (
    <>
      <div>
        {pokemons.map((pokemon) => (
          <h2>{pokemon.name}</h2>
        ))}
      </div>
    </>
  );
};

export default PokemonList;
