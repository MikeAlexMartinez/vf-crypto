const listingsToGeneral = require('../listingsToGeneral');
const { expectedGeneralListings, listingsLatestResponse } = require('../__data__/data');

describe('listingsToGeneral()', () => {
  it('should tranform coinmarketcap data array as expected', () => {
    const { data } = listingsLatestResponse;
    expect(listingsToGeneral(data)).toEqual(expectedGeneralListings);
  });
});
