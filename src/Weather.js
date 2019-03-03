import React, { Component } from 'react';
import cloud1 from './cloud1.png';
import './style.css';

class Weather extends Component
{
    render()
    {        
        return(

            <div className="display-flex">
                <div className="current">
                    <h1 className="location">{this.props.data.name}</h1>
                    <h2 className="date">Sunday, March 3, 2019</h2>
                    <div className="weatherIcon"><img src={cloud1} width="150" height="150"/>
                        <p className="temprature">{this.props.data.main ? this.props.data.main.temp:""}&#x2103;</p>
                        <p className="conditions">Sunny</p>
                        <hr></hr>
		            </div>
                </div>
            </div>
        )
    }
}

export default Weather;