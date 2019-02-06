import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const initialState = {};

const midleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(...midleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;