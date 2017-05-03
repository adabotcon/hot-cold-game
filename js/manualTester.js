import * as actions from './actions/index';
import store from './store';

store.dispatch(actions.guessNumber('5'));
console.log(store.getState()); // Logs [{ name: 'joe', rating: null}]