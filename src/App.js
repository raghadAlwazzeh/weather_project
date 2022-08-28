import React from 'react';
import './App.css';
import WeatherCard from './components/weather_cards/components';

function App() {
  const data = async () =>{
    const apiRes = await fetch (
      "https://api.openweathermap.org/data/2.5/weather?q=London&appid=ec21c50e3f8573e3c6b9c08b3698829a"
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };
  data().then(
    res=>{
      console.log("the feels like is" + res.main.feels_like);
      console.log("the temp is" + res.main.temp)
    }
    );
  return (
    <div className="App">
     <WeatherCard temp={-10} condition="Clear" city="Cairo" country="Egypt"/>
     <WeatherCard temp={15} condition="Clouds" city="Latakia" country="Syria"/>
     <WeatherCard temp={40} condition="Dust" city="Damascus" country="Syria"/>
    </div>
  );
}

export default App;
