import React from "react";
import "./PokemonCard.css";

//props are received from the parent component. {} are used to destructure props and also onClick
//which will be lifted up
const PokemonCard = ({ name, imageUrl, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {" "}
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default PokemonCard;
