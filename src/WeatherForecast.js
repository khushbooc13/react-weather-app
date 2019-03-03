import React from 'react';
import axios from 'axios';
import Weather from './Weather.js';

class WeatherForecast extends React.Component{

        state={
            weatherData:[],
            image:""

        }
    
    

    componentDidMount(){
        this.getWeather()    
    }

/*get data from api*/
    getWeather=()=>{

    const url="http://api.openweathermap.org/data/2.5/weather?q=London&APPID=4678f6154011969601d17681f720023a";
        axios.get(url).then(response => {
            this.setState({
                weatherData: response.data
               
            });
            
        }).catch(error => {
            console.log(error);
        });
}

    render() {

        return (

          <Weather data={this.state.weatherData}/>
        );
      }
}
export default WeatherForecast