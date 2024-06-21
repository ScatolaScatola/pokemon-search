import React from "react";

const PokemonInfo = ({ pokemon }) => {
  if (!pokemon) {
    return <div className="pokemon-info">Enter pokemon name to search</div>;
  }

  return (
    <div className="pokemon-info">
      <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>
        <strong>Height:</strong> {pokemon.height / 10} m
      </p>
      <p>
        <strong>Weight:</strong> {pokemon.weight / 10} kg
      </p>
      <p>
        <strong>Type:</strong>{" "}
        {pokemon.types.map((type) => type.type.name).join(", ")}
      </p>
    </div>
  );
};
export default PokemonInfo;
