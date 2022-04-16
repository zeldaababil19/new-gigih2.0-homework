import { createStore } from 'redux';
import { appReducer, initialState } from '../reducers';

const store = createStore(appReducer, initialState);

export default store;
