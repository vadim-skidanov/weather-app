import React, { useState } from "react";
import "./SearchBar.styles";

const SearchBar = () => {
  const [inputData, setInputData] = useState("");
  return (
    <form className="search">
      <input
        type="search"
        className="search__input"
        placeholder="Search"
        maxLength="20"
        onChange={(e) => setInputData(e.target.value)}
        value={inputData}
      />
      <button type="submit" className="search__submit" onClick={(e) => e.preventDefault()}>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
