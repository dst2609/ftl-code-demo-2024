import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({ name, imageUrl, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default PokemonCard;
