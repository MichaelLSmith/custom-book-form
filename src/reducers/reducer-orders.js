import { CREATE_BOOK } from '../actions';

export default function OrderReducer(state = {}, action) {
	console.log('action received', action);
	switch (action.type) {
		case CREATE_BOOK:
			return {...state, orders: action.payload }
	}
	return state;
}
