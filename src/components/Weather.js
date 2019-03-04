import React, { Component } from "react";
import Mist from "../Images/Mist.png";
import Cloud from "../Images/Cloud.png"
import Rain from "../Images/Rain.png"
import CloudSun from "../Images/CloudSun.png";
import Snow from "../Images/Snow.png";
import "../style.css";


class Weather extends Component {
    /**
     * Returns image based on forecast
     */
    setImage = param => {
        switch (param) {
            case "Haze":
                return Mist;
            case "Clear": {
                return CloudSun;
            }
            case "Clouds":{
                return Cloud;
            }
            case "Rain":{
                return Rain; 
            }
            case "Snow":{
                return Snow;
            }
            default:
                return "Failed";
        }
    };

    /**
     * Converts date in Day mm/dd/yyyy format
     */
    setDate = () => {
        var d = this.props.data.dt;
        var date = new Date(d * 1000);
        var months = [
            "January",
            "Febuary",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        var days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wenesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        var fullDay = days[date.getDay()];
        var fullMonth = months[date.getMonth()];
        var fullYear = date.getFullYear();
        var numberDay = date.getDate();
        var displayDate =
            fullDay + ", " + fullMonth + " " + numberDay + ", " + fullYear;
        return displayDate;
    };
    componentDidMount() {
        this.setDate();
    }
    render() {
        return (
                <div className="card">
                    <h1 className="location">{this.props.data.name}, {this.props.data.sys.country}</h1>
                    <h2 className="date">{this.setDate()}</h2>
                    <div className="weatherIcon">
                        <img
                            src={this.setImage(this.props.data.weather[0].main)}
                            width="150"
                            height="150"
                            alt="weather-type"
                        />
                        <p className="temp">
                            {this.props.data.main
                                ? Math.floor(this.props.data.main.temp)
                                : ""}
                            &#176;c
                        </p>
                        <p className="conditions">
                            {this.props.data.weather
                                ? this.props.data.weather[0].main
                                : ""}
                        </p>
                        <hr />
                    </div>
                </div>
        );
    }
}

export default Weather;
