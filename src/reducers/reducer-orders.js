import { CREATE_ORDER } from '../actions';

export default function OrderReducer(state = {}, action) {
	console.log('action received', action);
	switch (action.type) {
		case CREATE_ORDER:
			console.log('in reducer type');

			
			const combine = Object.assign({}, state, action.payload);
			console.log('combine',combine);
			return combine;
			// return { ...state, orders: action.payload }
	}
	return state;
}
