import React, { Component } from "react";
import { LocationList } from "./components/WeatherLocation/LocationList";
import ForecastExtended from "./components/ForecastExtended";
import "./App.css";

const cities = ["Buenos Aires,ar", "Madrid,es", "Lima,pe", "Bogota,col", "Washington,us"];
class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "Nueva ciudad"
    };
  }
  handleSelectedLocation = city => {
    this.setState({ city });
  };
  render() {
    const { city } = this.state;
    return (
      <div className="App">
        <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} />
        <ForecastExtended city={city} />
      </div>
    );
  }
}

export default App;
