import React, { useState, useEffect } from "react";
import "./PokemonList.css";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  // const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=200"
      );
      const data = await response.json();
      setPokemons(data.results);
    }

    fetchPokemon();
  }, []);

  // Filter Pokémon based on search term
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="pokemon-list">
        {filteredPokemons.map((pokemon) => (
          <div className="pokemon-item" key={pokemon.name}>
            <img
              src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
              alt={pokemon.name}
            />
            <h4>{pokemon.name}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default PokemonList;
