import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

export default applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
);
