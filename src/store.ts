import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { reducers } from './reducers';

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(logger, thunk)));

export type AppDispatch = typeof store.dispatch;
