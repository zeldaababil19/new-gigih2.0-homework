// import createStore
import { createStore } from 'redux';
// import reducer, initialState
import { appReducer, initialState } from '../reducers';

// create store
const store = createStore(appReducer, initialState);

// export store
export default store;
