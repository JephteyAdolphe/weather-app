import React, { useState } from "react"
import Conditions from './conditions/Conditions';
import '../App.css';

const Weather = () => {

    let [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('');
    const encodedCity = encodeURIComponent(city);

    function getWeather(e) {
        e.preventDefault();

        // Fetching weather data from API
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&units=imperial&appid=87747d91dbe41f823bd06eb6b53c65be`)
        .then(response => response.json())
        .then(response => {
            setResponseObj(response)
        })

    }

    return (
        // JSX code
        <div className="container">
            <h2>Find Current Weather Conditions</h2>
            <div className="form-wrapper">
            <form onSubmit={getWeather} className="weather-container">
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="form-control"
                    />
                <button type="submit" className="btn btn-warning">Get Forecast</button>
            </form>
            </div>
            <div className="square">
            <Conditions responseObj={responseObj} />
            </div>
        </div>

    )
}

export default Weather;
