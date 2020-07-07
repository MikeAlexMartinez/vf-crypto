/**
 * Takes a quotes object as given from latest listings endpoints
 * and keeps the required properties
 *
 * @param {*} quotes 
 */
function transformQuotes(quotes) {
  return Object.keys(quotes).reduce((shapedQuotes, key) => {
    const currentQuote = quotes[key];
    shapedQuotes[key] = {
      price: currentQuote.price,
      marketCap: currentQuote.market_cap,
      volume24h: currentQuote.volume_24h,
      percentChange24h: currentQuote.percent_change_24h,
      lastUpdated: currentQuote.last_updated,
    };
    return shapedQuotes;
  }, {});
}

function constructLogo(id) {
  return `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`;
}

/**
 * Takes an array of currencies form the latest list
 * and keeps the properties required for the VFCrypto
 * application
 * 
 * see test data for shape
 * 
 * @param {*} latestListing
 */
function listingsToGeneral(listingData) {
  return listingData.map((currency, i) => ({
    id: currency.id,
    logo: constructLogo(currency.id),
    rank: i + 1,
    name: currency.name,
    symbol: currency.symbol,
    slug: currency.slug,
    circulatingSupply: currency.circulating_supply,
    totalSupply: currency.total_supply,
    lastUpdated: currency.last_updated,
    quotes: transformQuotes(currency.quote)
  }));
}

module.exports = listingsToGeneral;
