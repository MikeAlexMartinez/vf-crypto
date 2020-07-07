import { createSelector } from 'reselect';

import { topTen, hasCoins, isTopTenLoading } from '../coinlist/selectors';
import { selectedCurrency } from '../currency/selectors';
import { selectedCoin } from '../coin/selectors';

const defaultQuote = {
  quoteLoading: true,
  price: 0,
  marketCap: 0,
  percentChange24h: 0,
  volume24h: 0,
};

export const defaultCoin = {
  notFound: true,
};

export const topTenListing = createSelector(
  topTen,
  selectedCurrency,
  (topTenList, currency) => topTenList.map((coinInfo) => {
    const quoteData = coinInfo.quotes[currency] || defaultQuote;
    return {
      rank: coinInfo.rank,
      logo: coinInfo.logo,
      name: coinInfo.name,
      slug: coinInfo.slug,
      quoteLoading: quoteData.quoteLoading,
      price: quoteData.price,
      marketCap: quoteData.marketCap,
      percentChange24h: quoteData.percentChange24h,
    };
  })
);

export const selectedCoinFromList = createSelector(
  topTen,
  selectedCoin,
  (topTenList, chosenCoin) =>
    topTenList.find(coin => coin.slug === chosenCoin) ||
    defaultCoin
);

export const selectedCoinQuote = createSelector(
  selectedCoinFromList,
  selectedCurrency,
  (coinInfo, currency) => (
    coinInfo && coinInfo.quotes && coinInfo.quotes[currency]
  ) || defaultQuote
);

export const coinFoundStatus = createSelector(
  hasCoins,
  isTopTenLoading,
  selectedCoinFromList,
  (initialLoadComplete, stillLoading, coinInfo) => ({
    initialLoad: !initialLoadComplete && stillLoading,
    notFound: !!(coinInfo.notFound),
  })
);

export const selectedCoinHeaderData = createSelector(
  selectedCoinFromList,
  selectedCoinQuote,
  (coinInfo, quote) => ({
    notFound: !!(coinInfo.notFound),
    logo: coinInfo.logo,
    name: coinInfo.name,
    symbol: coinInfo.symbol,
    quoteLoading: quote.quoteLoading,
    price: quote.price,
  })
);

export const selectedCoinBodyData = createSelector(
  selectedCoinFromList,
  selectedCoinQuote,
  (coinInfo, quote) => ({
    notFound: !!(coinInfo.notFound),
    symbol: coinInfo.symbol,
    rank: coinInfo.rank,
    marketCap: quote.marketCap,
    quoteLoading: quote.quoteLoading,
    volume24h: quote.volume24h,
    circulatingSupply: coinInfo.circulatingSupply,
    totalSupply: coinInfo.totalSupply,
  })
);
