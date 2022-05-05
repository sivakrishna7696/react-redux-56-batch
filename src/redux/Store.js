import { createStore } from 'redux';
import { reducer } from './reducer';

export const Store =  createStore(reducer)

// import { configureStore } from '@reduxjs/toolkit';
// import { reducer } from './reducer';

// export const Store =  configureStore(reducer)
