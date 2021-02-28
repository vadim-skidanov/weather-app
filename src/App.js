import React from "react";
import Header from "./components/Header/Header";
import BodyRow from "./components/BodyRow/BodyRow";
import { WeatherProvider } from "./context/WeatherContext";

const App = () => {
  return (
    <WeatherProvider>
      <div className="container">
        <Header />
        <BodyRow />
      </div>
    </WeatherProvider>
  );
};

export default App;
