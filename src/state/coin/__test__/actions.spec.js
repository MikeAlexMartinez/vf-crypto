import * as coinActions from '../actions';

describe('Coin Actions', () => {
  describe('selectCoin', () => {
    it('should return type of `SELECT_COIN` with provided slug', () => {
      const slug = 'test-slug';
      expect(coinActions.selectCoin(slug)).toEqual({
        type: coinActions.CONSTANTS.SELECT_COIN,
        payload: slug,
      });
    });
  });
});
