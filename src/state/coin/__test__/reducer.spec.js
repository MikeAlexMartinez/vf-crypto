import { selectCoin, CONSTANTS } from '../actions';
import { initialState, reducer } from '../reducer';

describe('Coin Reducer', () => {
  describe('Initial State', () => {
    it('should set coin to empty string on initialisation', () => {
      expect(reducer()).toEqual({
        coin: '',
      });
    })
  });
  describe(CONSTANTS.SELECT_COIN, () => {
    it('should set coin to empty string on initialisation', () => {
      const newCoinSlug = 'slug';
      expect(reducer(initialState, selectCoin(newCoinSlug))).toEqual({
        coin: newCoinSlug,
      });
    });
  });
  describe('Default', () => {
    it('should set coin to empty string on initialisation', () => {
      const startState = {
        coin: 'etheruem',
      }
      const testAction = {
        type: 'OTHER',
        payload: 'test'
      }
      expect(reducer(startState, testAction)).toBe(startState);
    });
  });
});
