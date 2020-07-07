import { createSelector } from 'reselect'

const rootSelector = (state) => state.currency;

export const availableCurrencies = createSelector(
  rootSelector,
  (state) => state.availableCurrencies
);

export const selectedCurrency = createSelector(
  rootSelector,
  (state) => state.selectedCurrency
);

export const symbols = createSelector(
  rootSelector,
  (state) => state.symbols
);

export const selectedSymbol = createSelector(
  symbols,
  selectedCurrency,
  (symbolObj, currency) => (currency && symbolObj[currency]) || '$'
);
