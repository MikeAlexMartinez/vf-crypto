import { createSelector } from 'reselect';

const rootSelector = (state) => state.coinList;

export const topTen = createSelector(
  rootSelector,
  (state) => state.topTen,
);

export const topTenSlugs = createSelector(
  topTen,
  (topTenList) => topTenList.map(coin => coin.slug)
);

export const isTopTenLoading = createSelector(
  rootSelector,
  (state) => state.loading
);

export const topTenErrorMessage = createSelector(
  rootSelector,
  (state) => state.error
);

export const lastUpdated = createSelector(
  rootSelector,
  (state) => state.lastUpdated
);

export const hasCoins = createSelector(
  topTen,
  (topTenList) => topTenList.length > 0
);

export const topCoin = createSelector(
  topTen,
  (topTenList, hasCoins) => hasCoins && topTenList[0]
);
