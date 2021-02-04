import React from "react";
import "./SearchBar.styles";

const SearchBar = () => {
  return (
    <form className="search">
      <input type="search" className="search__input" placeholder="Search" maxLength="20" />
      <button type="submit" className="search__submit">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
