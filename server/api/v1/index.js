const express = require('express')
const { fetchTopNWithCurrency } = require('../../datasource/coinmarketcap');
const coinListCache = require('../../cache/coinListCache');

const router = express.Router();
const { useCache, updateCache } = coinListCache();

router.use('/listing', useCache);
router.get('/listing', async (req, res) => {
  const { currency = 'USD' } = req.query
  try {
    const listingData = await fetchTopNWithCurrency(currency);
    updateCache(currency, listingData);
    return res.json({
      status: 'OK',
      source: 'coinmarketcap',
      data: listingData,
      errorMessage: null,
    });
  } catch (e) {
    console.error(e);
    return res.json({
      status: 'ERROR',
      data: null,
      errorMessage: 'Error fetching latest coin information',
    });
  }
});

module.exports = router;
