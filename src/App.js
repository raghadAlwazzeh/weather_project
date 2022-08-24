import React from 'react';
import './App.css';
import WeatherCard from './components/weather_cards/components';

function App() {
  return (
    <div className="App">
     <WeatherCard temp={-10} condition="Clear" city="Cairo" country="Egypt"/>
     <WeatherCard temp={15} condition="Clouds" city="Latakia" country="Syria"/>
     <WeatherCard temp={40} condition="Dust" city="Damascus" country="Syria"/>
    </div>
  );
}

export default App;
