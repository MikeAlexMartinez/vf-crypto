import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as coinList } from './coinlist/reducer';
import { reducer as selectedCoin } from './coin/reducer';
import { reducer as currency } from './currency/reducer';

import middleware from './middleware';

const rootReducer = combineReducers({
  coinList,
  selectedCoin,
  currency,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(
    middleware
  )
);

export default store;
