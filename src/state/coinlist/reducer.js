import { CONSTANTS } from './actions';

export const initialState = {
  topTen: [],
  loading: false,
  lastUpdated: '',
  error: '',
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONSTANTS.LOAD_TOP_TEN: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case CONSTANTS.LOAD_TOP_TEN_SUCCESS: {
      return {
        ...state,
        topTen: payload,
        lastUpdated: payload[0].lastUpdated,
        loading: false,
      };
    }
    case CONSTANTS.LOAD_TOP_TEN_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    default:
      return state;
  }
}
 