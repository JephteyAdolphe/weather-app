import React from 'react';
import './App.css';
import Weather from './components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div id="weather-container">
          <div id="form-wrapper">
            <form id="form">
              <div className="flex-wrapper">
                <div style={{flex: 6}}>
                  <input className="form-control" id="city-search" type="text" placeholder="Enter a City" />
                </div>

                <div style={{flex: 1}}>
                  <input id="submit" className="btn btn-warning" type="submit" name="Search" />
                </div>
                <Weather />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
