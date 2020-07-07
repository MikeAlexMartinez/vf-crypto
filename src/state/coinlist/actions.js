import { coreApi } from "../../utils/api"

export const CONSTANTS = {
  LOAD_TOP_TEN: 'LOAD_TOP_TEN' ,
  LOAD_TOP_TEN_SUCCESS: 'LOADED_TOP_TEN_SUCCESS',
  LOAD_TOP_TEN_ERROR: 'LOADED_TOP_TEN_ERROR',
};

const loadTopTen = () => ({
  type: CONSTANTS.LOAD_TOP_TEN,
})
const loadTopTenSuccess = (coins) => ({
  type: CONSTANTS.LOAD_TOP_TEN_SUCCESS,
  payload: coins,
})
const loadTopTenError = (message) => ({
  type: CONSTANTS.LOAD_TOP_TEN_ERROR,
  payload: message,
})

export const loadCoins = (currency = 'USD') => async (dispatch) => {
  dispatch(loadTopTen());
  try {
    const targetUri = coreApi(`listing?currency=${currency}`);
    const response = await fetch(targetUri, {
      method: 'GET',
      headers: {
        accept: 'application/json',
      }
    });
    const { data, errorMessage } = await response.json();
    if (data) {
      dispatch(loadTopTenSuccess(data))
    }
    if (errorMessage) {
      dispatch(loadTopTenError('Error Loading Coins...'));
    }
  } catch (e) {
    console.error(e);
    dispatch(loadTopTenError('Error Loading Coins...'));
  }
}
