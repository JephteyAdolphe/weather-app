import React, { Component } from 'react';

class Weather extends Component {

  constructor() {
    super()
    this.state = {
      weather: 'Test Weather'
    }
  }

  render() {
    return (
      <h1>
        Jeff's Weather App
      </h1>
      
    )
  }
}

export default Weather;
