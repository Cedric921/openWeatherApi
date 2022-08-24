import React from 'react';
import './Days.css';

type DaysType = {
	weather: {
		city: any;
		cnt: any;
		cod: string;
		list: {
			dt: number;
			main: {
				temp: number;
				feels_like: number;
				grnd_level: number;
				humidity: number;
				pressure: number;
				sea_level: number;
				temp_kf: number;
				temp_max: number;
				temp_min: number;
			};
			weather: { id: number; main: string; description: string }[];
			dt_txt: string;
		}[];
	};
};

const Days = ({ weather }: DaysType) => {
	return (
		<div className='weathers'>
			{weather &&
				weather.list.splice(0, 8).map((element, index) => (
					<div key={index} className='weather'>
						{element.weather.map((item, index) => (
							<div key={index} className='weather__details'>
								<h2>{item.main}</h2>
								<h4>{item.description}</h4>
							</div>
						))}
						<p className='weather__title-value'>
							<span>{Math.floor(element.main.temp - 273.15)}°</span>
						</p>
						<div className='weather__other'>
							<div>
								<h4>{element.main.humidity}</h4>
								<p>humidity</p>
							</div>
							<div>
								<h4>{element.main.pressure}</h4>
								<p>pressure</p>
							</div>
						</div>
						<div className='weather-town'>Goma</div>
						<h4>{element.dt_txt.split(' ')[0]}</h4>
					</div>
				))}
		</div>
	);
};

export default Days;
