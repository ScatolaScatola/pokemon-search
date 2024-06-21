import React, { useState } from "react";
import "./index.css";
import Search from "./Search";
import Pokemoninfo from "./Pokemoninfo";

function App() {
  const [pokemon, setPokemon] = useState(null);

  const handleSearch = (data) => {
    setPokemon(data);
  };

  return (
    <div className="App">
      <div className="container">
        <Search onSearch={handleSearch} />
        <Pokemoninfo pokemon={pokemon} />
      </div>
    </div>
  );
}

export default App;
