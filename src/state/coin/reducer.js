import { CONSTANTS } from './actions';

export const initialState = {
  coin: '',
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONSTANTS.SELECT_COIN: {
      return {
        ...state,
        coin: payload,
      };
    }
    default:
      return state;
  }
}
