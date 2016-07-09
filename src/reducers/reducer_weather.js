import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
		// do not mutate state in redux, 
		// concant makes a new array with old data and new data
			// return state.concat([action.payload.data]);
			// ES6 syntax gives same array
			return [ action.payload.data, ...state ];
	}
	return state;
}