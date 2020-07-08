import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const middleware = [
  thunkMiddleware,
];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export default applyMiddleware(
  ...middleware,
);
