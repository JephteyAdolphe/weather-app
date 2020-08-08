/*import React from 'react';
import './App.css';
import Weather from './components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
      city: '',
      temp: null,
      minTemp: null,
      maxTemp: null,
      humidity: null,
      desc: '',
      icon: '',
      forecast: []
  
  }
  this.fetchForecast = this.fetchForecast.bind(this)
};

componentDidMount() {
  fetch.get("https://api.openweathermap.org/data/2.5/weather?q=miami&units=imperial&appid=87747d91dbe41f823bd06eb6b53c65be")
  .then(response => {
    console.log(response)
  })
  this.fetchForecast()
}


fetchForecast() {
  //event.preventDefault();
  console.log('Fetching...')

  fetch("api.openweathermap.org/data/2.5/weather?q=Miami&units=imperial&appid=87747d91dbe41f823bd06eb6b53c65be")
  .then(response => response.json())
  .then(data => 
      this.setState({
        weather:data
      })
    )
   //.then(console.log(this.response))
   //.catch(err => alert("Wrong city name!"))
}

handleSubmit = (event) => {
  event.preventDefault()
  axios.post(`api.openweathermap.org/data/2.5/weather?q=miami&units=imperial&appid=87747d91dbe41f823bd06eb6b53c65be`)
  .then(response => {
    console.log(response.json())
  })
}

handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
}

  render() {
    //const { city, temp, minTemp, maxTemp, humidity, desc, icon } = this.state
    return (
      <div className="container">
        <div id="weather-container">
          <div id="form-wrapper">
            <form id="form" onSubmit={this.handleSubmit} >
              <div className="flex-wrapper">
                <div style={{flex: 6}}>
                  <input className="form-control" id="city-search" type="text" placeholder="Enter a City" value={this.city} name="city" onChange={this.handleInputChange} required />
                </div>

                <div style={{flex: 1}}>
                  <input id="submit" className="btn btn-warning" type="submit" value="Search" />
                </div>
              </div>
            </form>
            <script>
              var form = document.getElementById('form')

              form.addEventListener('submit', (event))
            </script>
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
import React from 'react';
import './App.css';
import Weather from './components/Weather';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <h1>React Weather App</h1>
      </header>
      <main>
        <Weather />
      </main>
      <Footer />
    </div>
    
  );
 }
 export default App;
 