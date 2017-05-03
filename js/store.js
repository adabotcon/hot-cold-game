import { createStore } from 'redux';
import rootReducer from './reducers/index';

export default createStore(reducers.numberReducer);

