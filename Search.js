import React, { useState } from "react";
import { Pokedex } from "pokeapi-js-wrapper";

const P = new Pokedex();

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    P.getPokemonByName(searchTerm.toLowerCase())
      .then((data) => {
        onSearch(data);
      })
      .catch((err) => onSearch(null));
  };

  return (
    <div className="search-container">
      <img
        src={require("./pokemonLogo.png")}
        alt="Pokemon Logo"
        className="logo"
      />
      <input
        type="text"
        placeholder="Enter Pokemon name"
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
export default Search;
