/*import React from 'react';
import './App.css';
import Weather from './components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
      city: '',
      temp: null,
      minTemp: null,
      maxTemp: null,
      desc: '',
      icon: ''
  
  }
  this.fetchForecast = this.fetchForecast.bind(this)
  this.handleChange = this.handleChange.bind(this)
};

componentDidMount() {
  this.fetchForecast()
}

fetchForecast() {
  console.log('Fetching...')

  fetch('http://127.0.0.1:8000/', {method: "GET", mode: "cors", headers: {"Content-Type": "application/json", "Accept": "application/json"}})
  .then(response => response.json())
  /*.then(data => 
      this.setState({
        weather:data
        console.log(weather)
      })
    )
   .then(data => console.log(data))
   .catch(err => alert("Wrong city name!"))
}

handleChange(e) {
  var name = e.target.name
  console.log('City is: ', name)

  this.setState({
    
  })
}

  render() {
    return (
      <div className="container">
        <div id="weather-container">
          <div id="form-wrapper">
            <form id="form">
              <div className="flex-wrapper">
                <div style={{flex: 6}}>
                  <input onChange={this.handleChange} className="form-control" id="city-search" type="text" placeholder="Enter a City" />
                </div>

                <div style={{flex: 1}}>
                  <input id="submit" className="btn btn-warning" type="submit" name="Search" />
                </div>
                
              </div>
            </form>
          </div>
          <div>
              <h1 className="display">{this.data}</h1>
              <p className="desc"></p>
              <p className="temp"></p>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
*/

import React from "react"
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import Weather from "./components/Weather";

import places from "./keys/places.js"


class App extends React.Component {
    
    // input reference to access it through DOM API in React
    inputRef = React.createRef();

    constructor() {
		super();
		this.state = {
            city: {},
            weatherData: {},
            description: {},
            weatherIsHidden: false
        }
        this.clearInput =  this.clearInput.bind(this)        
    }
    
    componentDidMount () {
        // To load GooglePlacesAutocomplete API
        const script = document.createElement("script");

        const end1 = "https://maps.googleapis.com/maps/api/js?key="
        const end2 = "&libraries=places"
        let fullURL = end1 + places + end2

        script.src = fullURL;
        script.async = true;
        document.body.appendChild(script);
    }

    clearInput(event) {
        event.preventDefault();
        // Setting state of <GooglePlacesAutocomplete /> component
        // console.log(this.inputRef.current)
        // console.log(this.inputRef.current.state.value)
        // this.inputRef.current.state.value = ""
        
        // Empties the suggestions array and input value
        this.inputRef.current.setState({
            value: "",
            suggestions: []
        })

        // Upon clicking cross icon, weatherData will also be hidden 
        // and city object will be empty
        this.setState({
            city: {},
            weatherIsHidden: true
        })
    }
    
    render(){
        // For input tag
        const inputStyles = {
            width: "100%"
        }
        // console.log("testing6")
        // console.log(this.inputRef)
        // console.log("weather hidden from app.js ", this.state.weatherIsHidden)

		return(
            <div className="container background">
                <div className="header">
                    <h3>Welcome to</h3>
                    <h1 id="brand-name">Jeff's Wonderful Weather Finder</h1>
                </div> 
                
                {/* Use ref to access DOM elements in React */}
                <GooglePlacesAutocomplete
                        placeholder="Enter a City"
                        inputStyle={inputStyles} 
                        ref={this.inputRef}
                        onSelect={(description) => (
                            this.setState({ 
                                city: description,  // city state object will get selected city name 
                                weatherIsHidden: false // weather will not be hidden
                            })
                        )}
                />
                
                {/* Clearing input on clicking X */}
                <span onClick={this.clearInput} className="clear-input">Clear</span>
                
                {/* Passing city object to Weather component 
                  * Weather component will be hidden based on weatherIsHidden state
                */}
                <Weather city={this.state.city} weatherIsHidden = {this.state.weatherIsHidden}/>

            </div>
        )
    } 
}

export default App