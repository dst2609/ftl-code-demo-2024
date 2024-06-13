import React from "react";
import Header from "./Components/Header/Header";
import PokemonCard from "./Components/PokemonCard/PokemonCard";
import pokemonData from "./data/pokemonData";
import "./App.css";

const App = () => {
  return (
    <>
      <fieldset>
        <legend>App.jsx</legend>
        <Header title="Pokémon Details" />
        <div className="app">
          {pokemonData.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              description={pokemon.description}
              imageUrl={pokemon.imageUrl}
            />
          ))}
        </div>
      </fieldset>
    </>
  );
};

export default App;
