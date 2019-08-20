import React from 'react'
import PropTypes from "prop-types";

import WeatherData from "./../WeatherLocation/WeatherData";

export default function ForecastItem({ weekDay, hour, data }) {
    return (
        <div>
            <h2>
                {weekDay} - {hour} hs
            </h2>
            <WeatherData data={data} />
        </div>
    )
}


ForecastItem.propTypes = {
    weekDay: PropTypes.string,
    hour: PropTypes.number,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}