import React, { useState, useEffect } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import Modal from "../Modal/Modal";
import "./PokemonList.css";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
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
            <PokemonCard
              name={pokemon.name}
              imageUrl={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
              onClick={() => setSelectedPokemon(pokemon)}
              // onClick={() => console.log("click pokemon + ", pokemon)}
            />
          </div>
        ))}
      </div>
      {/* Only display Modal when pokemoncard is clicked/selected */}
      {/* If selected pokemon is not null then show modal.... */}

      {/* Ternary statement  */}

      {selectedPokemon && (
        <Modal
          show={selectedPokemon !== null}
          onClose={() => setSelectedPokemon(null)}
        >
          <h2>{selectedPokemon.name}</h2>
          <img
            src={`https://img.pokemondb.net/artwork/large/${selectedPokemon.name}.jpg`}
            alt={selectedPokemon.name}
            style={{ width: "100%" }}
          />
        </Modal>
      )}
    </>
  );
}

export default PokemonList;
