import React from "react";
import axios from "axios";
import Weather from "../components/Weather.js";
import Form from "../components/Form.jsx"
import W from "../components/W"
const API_KEY = '4678f6154011969601d17681f720023a';

class WeatherForecast extends React.Component {
    state = {
        weatherData: [],
        loaded: false,
        city: '',
    };

    // componentDidMount() {
    //     this.getWeather();
    // }

    /**Get input data from text box */

    getCity = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
        // console.log(event.target.name, event.target.value);
    }

    /** 
     * Get data from api*/
    getWeather = (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const url =
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&&units=metric`;
        axios
            .get(url)
            .then(response => {
                this.setState({
                    weatherData: response.data
                });
                console.log(this.state.weatherData)
                this.setState({ loaded: true });
            })
            .catch(error => {
                console.log(error);
            });
       // console.log(url);
    };

    render() {
        return (
            <>
                <Form getWeather={this.getWeather} />
                {this.state.loaded ? <Weather data={this.state.weatherData} /> : null }
                </>

        );
    }
}
export default WeatherForecast;
