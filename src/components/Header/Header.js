import React from "react";
import "./Header.styles";
import SearchBar from "./../SearchBar/SearchBar";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <SearchBar />
    </header>
  );
};

export default Header;
