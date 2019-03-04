import React from "react";
import axios from "axios";
import Weather from "../components/Weather.js";

class WeatherForecast extends React.Component {
    state = {
        weatherData: [],
        loaded: false
    };

    componentDidMount() {
        this.getWeather();
    }

    /*get data from api*/
    getWeather = () => {
        const url =
            "http://api.openweathermap.org/data/2.5/weather?q=Mumbai&APPID=4678f6154011969601d17681f720023a&&units=metric";
        axios
            .get(url)
            .then(response => {
                this.setState({
                    weatherData: response.data
                });
                this.setState({ loaded: true });
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return !this.state.loaded ? (
            <h1>Loading...</h1>
        ) : (
            <Weather data={this.state.weatherData} />
        );
    }
}
export default WeatherForecast;
