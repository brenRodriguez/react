import React, { Component } from "react";
import { PropTypes } from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress"

import Location from "./Location";
import WeatherData from "./WeatherData";
import transformWeather from "../../services/transformWeather";
import getUrlWeatherByCity from "../../services/getUrlWeatherByCity"
import { SUN } from "./../../constants/weather.js";


import "./styles.css";

class WeatherLocation extends Component {
    constructor(props){
        super(props);

        const {city} = props;
        this.state = {
            city,
            data: null,
        }
    }
    componentDidMount = () => {
        this.handleUpdateClick()
    }
    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city)
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data)
            this.setState({data: newWeather})
        })
    }
    render(){
        const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state
        return(
            <div className="weather-location-cont" onClick={onWeatherLocationClick}>
                <Location city= {city}></Location>
               {data ? <WeatherData data= {data}></WeatherData> : <CircularProgress size={50} />}
            </div>
        )
    }
};

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func
}
export default WeatherLocation;