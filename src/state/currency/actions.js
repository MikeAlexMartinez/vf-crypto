export const CONSTANTS = {
  SELECT_CURRENCY: 'SELECT_CURRENCY',
};

export const selectCurrency = (currency) => ({
  type: 'SELECT_CURRENCY',
  payload: currency,
});
