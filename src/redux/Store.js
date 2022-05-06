// import { createStore } from 'redux';
import { reducer } from './reducer';
import { legacy_createStore as createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

export const Store =  createStore(reducer,applyMiddleware(thunk))

