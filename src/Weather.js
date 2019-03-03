import React, { Component } from 'react';
import cloud1 from './cloud1.png';
import rain from './rain.png';
import './style.css';

class Weather extends Component
{
    setImage=(param)=>{
        switch(param){
            case 'Haze':
                return {cloud1};
                break;
            default:
                return {rain};
                break;
        }
        
    }
    setDate=()=>{
        var d=this.props.data.dt;
        var date= new Date(d*1000);
        var months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
        var days=['Sunday','Monday','Tuesday','Wenesday','Thursday','Friday','Saturday'];
        var fullDay=days[date.getDay()];
        var fullMonth=months[date.getMonth()];
        var fullYear=date.getFullYear();
        var numberDay=date.getDate();
        var displayDate=fullDay+", "+fullMonth+" "+numberDay+", "+fullYear;
        return displayDate;

    }
    componentDidMount()
    {
        this.setImage();
        this.setDate();
    }
    render()
    { 
        console.log(this.setImage('Haze'));
       // console.log(this.props.data.weather ? this.props.data.weather[0].main:"null");   
        return (

            <div className="display-flex">
                <div className="current">
                    <h1 className="location">{this.props.data.name}</h1>
                    <h2 className="date">{this.setDate()}</h2>
                    <div className="weatherIcon"><img src={this.setImage(this.props.data.weather ? this.props.data.weather[0].main:"")} width="150" height="150"/>
                        <p className="temprature">{this.props.data.main ? Math.floor(this.props.data.main.temp):""}&#x2103;</p>
                        <p className="conditions">{this.props.data.weather ? this.props.data.weather[0].main:""}</p>
                        <hr></hr>
		            </div>
                </div>
            </div>
        )
    }
}

export default Weather;