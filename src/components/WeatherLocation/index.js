import React, { Component } from "react";

import Location from "./Location";
import WeatherData from "./WeatherData";

import { SUN, WINDY } from "./../../constants/weather";

import "./styles.css";

const location = "Buenos Aires,ar";
const api_key = "082f7d56f77ac1684791f60a4f72e4ac";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
const data = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: "10 m/s",
}

class WeatherLocation extends Component {
    constructor(){
        super();
        this.state = {
            city: "Buenos Aires",
            data: data,
        }
    }

    handleUpdateClick = () => {
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(data => {
            console.log(data)
            debugger;
        })

        console.log("actualizado");
        this.setState({
            city: "Buenos Aires", 
        })
    }
    render(){
        const {city, data} = this.state
        return(
            <div className="weather-location-cont">
                <Location city= {city}></Location>
                <WeatherData data= {data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        )
    }
};

export default WeatherLocation;