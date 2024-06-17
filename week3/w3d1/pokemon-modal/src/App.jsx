import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import PokemonList from "./Components/PokemonList/PokemonList";

const App = () => {
  return (
    <>
      <Header />
      {/* <div>App</div> */}
      <PokemonList />
    </>
  );
};

export default App;
