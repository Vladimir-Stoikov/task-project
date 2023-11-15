import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { reducers } from './reducers';
import { ActionsAxios } from 'types/reduxAxios';

const thunkMW: ThunkMiddleware<ActionsAxios> = thunk;
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(logger, thunkMW)));

export type AppDispatch = typeof store.dispatch;
