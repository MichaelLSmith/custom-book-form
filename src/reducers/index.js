// Set up your root reducer here...
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import OrderReducer from './reducer-orders';

const rootReducer = combineReducers({
  orders: OrderReducer,
  form: formReducer
});

export default rootReducer;
