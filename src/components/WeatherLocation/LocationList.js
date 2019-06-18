import React, { Component } from "react";
import { PropTypes } from "prop-types";
import WeatherLocation from "./index";

export const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick")
        onSelectedLocation(city)
    }
  const renderCities = cities => cities.map(city => 
    <WeatherLocation 
        city={city} 
        key={city} 
        onWeatherLocationClick={() => handleWeatherLocationClick(city)} />);
  return <div>{renderCities(cities)}</div>;
};

LocationList.propTypes = {
  cities: PropTypes.array,
  onSelectedLocation: PropTypes.func,
};
