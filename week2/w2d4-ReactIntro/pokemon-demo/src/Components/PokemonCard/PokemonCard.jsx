import React from "react";
import "./PokemonCard.css";

const PokemonCard = (props) => {
  return (
    <>
      <fieldset>
        <legend>PokemonCard.jsx</legend>
        <div className="card">
          <img src={props.imageUrl} alt={props.name} />
          <h2>{props.name}</h2>
          <h4>Type: {props.type}</h4>
          <p>{props.description}</p>
        </div>
      </fieldset>
    </>
  );
};

export default PokemonCard;
