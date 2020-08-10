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
 