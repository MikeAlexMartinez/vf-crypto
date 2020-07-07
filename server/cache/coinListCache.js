const { isAfter, add } = require('date-fns')

function supportedCurrencies() {
  return [
    'USD',
    'GBP',
    'EUR',
    'JPY',
    'KRW',
  ];
}

function coinListCache() {
  const cache = supportedCurrencies().reduce((hash, key) => ({
    ...hash,
    [key]: {
      expires: new Date(),
      data: [],
    }
  }), {});

  const useCache = (req, res, next) => {
    try {
      const { currency = 'USD' } = req.query;
      const currencyCache = cache[currency];
      const hasExpired = isAfter(new Date(), currencyCache.expires);
      if (hasExpired) {
        return next();
      } else {
        return res.json({
          status: 'OK',
          source: 'cache',
          data: currencyCache.data,
          errorMessage: null,
        });
      }
    } catch (e) {
      console.error(e);
      return res.json({
        status: 'ERROR',
        data: null,
        errorMessage: 'Error fetching latest coin information from cache',
      });
    }
  }

  const updateCache = (currency, data) => {
    const expires = add(new Date(), {
      minutes: 1,
    });
    cache[currency] = {
      expires,
      data
    };
    return;
  }

  return {
    updateCache,
    useCache,
  };
}

module.exports = coinListCache;
