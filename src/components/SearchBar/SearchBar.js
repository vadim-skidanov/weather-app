import React, { useState, useContext } from "react";
import "./SearchBar.styles";
import { getCityWeatherFromSearch } from "../../WeatherApiClient/WeatherApiClient";
import { WeatherContext } from "./../../context/WeatherContext";
import { mapWeatherData } from "../../utils/dataMappers";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [weatherSearchResult, setWeatherSearchResult] = useContext(WeatherContext);

  const getSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleEnterPress = async (e) => {
    if (e.key === "Enter" && e.target.value) {
      const searchResult = await getCityWeatherFromSearch(searchQuery);
      if (searchResult === null) return;
      const result = mapWeatherData(searchResult);

      setWeatherSearchResult(result);
    } else {
      setWeatherSearchResult(null);
    }
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search">
      <input
        type="search"
        className="search__input"
        placeholder="Search"
        maxLength="20"
        onChange={getSearchQuery}
        value={searchQuery}
        onKeyPress={handleEnterPress}
      />
      <button type="submit" className="search__submit" onClick={preventDefault}>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
