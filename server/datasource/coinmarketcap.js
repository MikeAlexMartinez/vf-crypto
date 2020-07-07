const request = require('superagent')
const listingsToGeneral = require('../mapping/listingsToGeneral');

const {
  COINMARKETCAP_API,
  COINMARKETCAP_API_KEY,
} = process.env

const constructRequest = (uri) => request
  .get(uri)
  .set('X-CMC_PRO_API_KEY', COINMARKETCAP_API_KEY)
  .set('Accept', 'application/json');

const listingUri = (number, currency) =>
  `${COINMARKETCAP_API}/cryptocurrency/listings/latest?start=1&limit=${number}&convert=${currency}`;

/**
 * Returns the top given number of cryptocurrencies by marketcap
 * with financial info given in the provided currency
 * 
 * @param {number} number 
 * @param {string} currency
 */
async function fetchTopNWithCurrency(currency = 'USD', number = 10) {
  try {
    const res = await constructRequest(listingUri(number, currency));
    const { data, status } = res.body;
    if (!status.error_message) {
      const transformedData = listingsToGeneral(data);
      return transformedData;
    } else {
      throw new Error(status.error_message);
    }
  } catch (e) {
    console.error(e);
    throw new Error('Error fetching currencies from coinmarketcap')
  }
}

module.exports = {
  fetchTopNWithCurrency,
};
