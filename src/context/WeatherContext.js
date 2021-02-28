import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const WeatherContext = createContext("");

export const WeatherProvider = (props) => {
  const [weatherSearchResult, setWeatherSearchResult] = useState(null);

  return (
    <WeatherContext.Provider value={[weatherSearchResult, setWeatherSearchResult]}>
      {props.children}
    </WeatherContext.Provider>
  );
};

WeatherProvider.defaultProps = {
  children: null,
};

WeatherProvider.propTypes = {
  children: PropTypes.element,
};
