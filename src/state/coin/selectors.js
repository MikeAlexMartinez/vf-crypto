import { createSelector } from 'reselect';

const rootReducer = (state) => state.selectedCoin;

export const selectedCoin = createSelector(
  rootReducer,
  (state) => state.coin
);
