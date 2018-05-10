import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';

/* eslint-disable no-underscore-dangle, no-undef */
const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
    }),
    composeEnhencers(applyMiddleware(thunk)),
  );
  return store;
};
