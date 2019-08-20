import React, { Component } from 'react'
import { PropTypes } from "prop-types";

import ForecastItem from "./ForecastItem"
import transformForecast from "./../services/transformForecast";

import "./styles.css";


const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
// const data={
//     temperature: 10,
//     weatherState: 10,
//     humidity: "normal",
//     wind: "normal" 
// }

export const api_key = "082f7d56f77ac1684791f60a4f72e4ac";
export const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
    constructor() {
        super()
        this.state = {
            forecastData: null
        }
    }

    componentDidMount = () => {
        this.updateCity(this.props.city);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.city !== state.city) {
            return {
                city: props.city,
            };
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.city !== prevProps.city) {
            this.setState({ forecastData: null })
            this.updateCity(this.props.city);
        }
    }
    updateCity = city => {
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json()).then(
                weather_data => {
                    const forecastData = transformForecast(weather_data)
                    console.log(forecastData)
                    this.setState({ forecastData })
                }
            )
        )
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map((forecast, index) => <ForecastItem weekDay={forecast.weekDay} key={index} data={forecast.data} hour={forecast.hour}></ForecastItem>)
    }
    renderProgress() {
        return <h3> "Cargando pronostico extendido..." </h3>;
    }
    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className="forecast-title">Pronostico extendido para {city}</h2>
                {forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string,
};


export default ForecastExtended