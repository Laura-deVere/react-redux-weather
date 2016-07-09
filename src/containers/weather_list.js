import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		return (
			<tr key={name}>
				<td>{name}</td>
			</tr>
		)
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temerpature</th>
						<th>Pressure</th>
						<th>Humidity</th>
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