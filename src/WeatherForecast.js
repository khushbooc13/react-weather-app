import React from 'react';
import axios from 'axios';
import Weather from './Weather.js';

class WeatherForecast extends React.Component{

        state={
            weatherData:[],
            isLoading:false

        }
    
    

    componentDidMount(){
        this.getWeather()    
    }

/*get data from api*/
    getWeather=()=>{
        this.setState({isLoading:true})
    const url="http://api.openweathermap.org/data/2.5/weather?q=Mumbai&APPID=4678f6154011969601d17681f720023a";
        axios.get(url).then(response => {
            this.setState({
                weatherData: response.data,
            });
            this.setState({isLoading:false})
        }).catch(error => {
            console.log(error);
        });
}

    render() {

        return this.setState.isLoading?<h1>Loading...</h1>:<Weather data={this.state.weatherData}/>
        // return (

        //   <Weather data={this.state.weatherData}/>
        // );
      }
}
export default WeatherForecast