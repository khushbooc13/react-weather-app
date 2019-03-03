import React, { Component } from 'react';
import cloud1 from './cloud1.png';
import './style.css';
import WeatherForecast from './WeatherForecast';

class App extends Component {
  render() {
    return (
       <div>
         <WeatherForecast/>
       </div>
    );
  }
}

export default App;
