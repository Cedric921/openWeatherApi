import React from 'react';

type WeatherType = {
	weathers: {
		country: string;
		lat: number;
	}[];
};

const Weather = ({ weathers }: WeatherType) => {
	return (
		<div>
			{weathers.map((weather, index) => (
				<div key={index} className='weather'>
					{weather.country}
					<h4>{weather.lat}</h4>
				</div>
			))}
		</div>
	);
};

export default Weather;
