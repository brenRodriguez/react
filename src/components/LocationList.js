import React, { Component } from "react";
import { PropTypes } from "prop-types";
import WeatherLocation from "./WeatherLocation/index";
import "./styles.css";

export const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
        onSelectedLocation(city)
    }
  const renderCities = cities => cities.map(city => 
    <WeatherLocation 
        city={city} 
        key={city} 
        onWeatherLocationClick={() => handleWeatherLocationClick(city)} />);
  return <div className="location-list">{renderCities(cities)}</div>;
};

LocationList.propTypes = {
  cities: PropTypes.array,
  onSelectedLocation: PropTypes.func,
};
