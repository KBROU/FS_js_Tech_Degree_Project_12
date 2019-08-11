import React, { Component } from 'react'
import axios from 'axios';
require('dotenv').config();

const darkSkyApiKey=process.env.REACT_APP_DarkSky_APIKEY;


export default class Weather extends Component {

  constructor() {
    super();
    this.state={
      dailyWeather: '',
      hourlyWeather: '',
      minWeather: '',
      load: true
    };
  }

  componentDidMount () {
    this.intializeFunction();
    window.onpopstate = (e) => {
          this.intializeFunction();
        }
  }
// had to use cors-anywhere because darksky did not meet CORS regulations
//was getting the following error No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access.
//Answer link https://www.freecodecamp.org/forum/t/calling-openweathermap-api-is-blocked-due-to-cors-header-access-control-allow-origin-missing/191868/3

  intializeFunction = () => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${darkSkyApiKey}/30.672281,-87.977234`)
      .then(response => {
        this.setState({
          dailyWeather: response.data.daily.summary,
          hourlyWeather: response.data.hourly.summary,
          minWeather: response.data.minutely.summary,
          load: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
     return (
       <div>
         <p><strong>Daily Summary:</strong> {this.state.dailyWeather}</p>
         <p><strong>Hour Summary:</strong> {this.state.hourlyWeather}</p>
         <p><strong>Minute Summary:</strong> {this.state.minWeather}</p>
       </div>
     )
  }
}
