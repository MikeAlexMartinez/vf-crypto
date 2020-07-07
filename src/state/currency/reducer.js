import { CONSTANTS } from './actions'

export const initialState = {
  availableCurrencies: [
    'USD',
    'GBP',
    'EUR',
    'JPY',
    'KRW',
  ],
  selectedCurrency: 'USD',
  symbols: {
    USD: '$',
    GBP: '£',
    EUR: '€',
    JPY: '¥',
    KRW: '₩',
  }
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONSTANTS.SELECT_CURRENCY: {
      return {
        ...state,
        selectedCurrency: payload,
      };
    }
    default:
      return state;
  }
}
