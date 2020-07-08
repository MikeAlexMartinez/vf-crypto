import { selectedCoin } from '../selectors';

const state = {
  selectedCoin: {
    coin: 'test-coin'
  }
};

describe('Coin Selectors', () => {
  describe('selectedCoin', () => {
    it('should return selectedCoin from state', () => {
      expect(selectedCoin(state)).toEqual('test-coin');
    });
  });
});
