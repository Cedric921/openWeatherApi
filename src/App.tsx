import { useState, useEffect } from 'react';
import './App.css';
import Days from './components/Days';
import Weather from './components/Weather';

type WeatherType = {};

function App() {
	const [weather, setWeather] = useState<any>(null);
  const [allWeather, setallWeather] = useState<any>(null);
  
	const API_KEY = '9d64eb8a25577f3e326fe21962cd1c0f';
	const API_LANG = 'en';
	const API_CITY = 'kinshasa';

	useEffect(() => {
		fetch(
			`http://api.openweathermap.org/geo/1.0/direct?q=Goma&limit=5&appid=${API_KEY}`
		)
			.then((res) => res.json())
			.then((data) => setWeather(data))
			.catch();

		fetch(
			`https://api.openweathermap.org/data/2.5/forecast?q${API_CITY}&id=524901&lang=${API_LANG}&ctn=4&appid=${API_KEY}`
		)
			.then((res) => res.json())
			.then((data) => setallWeather(data))
			.catch();
	}, []);

	useEffect(() => {
		console.log(weather, allWeather);
	}, [weather, allWeather]);

	return (
		<div className='App'>
			{/* <div>{weather && <Weather weathers={weather} />}</div> */}
      <div className=''>{allWeather && <Days weather={allWeather} />}</div>
      
		</div>
	);
}

export default App;
