import React, { useState, useEffect } from "react";
import "./PokemonList.css";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
      const data = await response.json();
      setPokemons(data.results);
    }

    fetchPokemon();
  }, []);

  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => (
        <div className="pokemon-item" key={pokemon.name}>
          <img
            src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
            alt={pokemon.name}
          />
          <h4>{pokemon.name}</h4>
          {/* <p>Type: {pokemon.type}</p> */}
        </div>
      ))}
    </div>
  );
}

export default PokemonList;
