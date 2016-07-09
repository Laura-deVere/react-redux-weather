import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		
		return (
			<tr key={name}>
				<td>{name}</td>
				<td>
					<Chart data={temps} color="orange" units="K" />
				</td>
				<td>	
					<Chart data={pressures} color="green" units="hPa" />
				</td>
				<td>	
					<Chart data={humidities} color="grey" units="%" />
				</td>
			</tr>
		)
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temerpature(K)</th>
						<th>Pressure(hPa)</th>
						<th>Humidity(%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({weather}) {
	// whenever a key and value are identical we can
	// simply write {weather} ES6 
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);