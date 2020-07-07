import React from 'react';
import { useSelector, } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { hasCoins } from '../../state/coinlist/selectors';

import Header from '../../components/Header/Header';
import CoinInfoHeader from '../../components/CoinInfoHeader/CoinInfoHeader';
import CoinInfoBody from '../../components/CoinInfoBody/CoinInfoBody'
import CurrencyDropdown from '../../components/CurrencyDropdown/CurrencyDropdown';

const Coin = () => {
  const coinsAreAvailable = useSelector(hasCoins)

  const LeftContents = coinsAreAvailable
    ? CoinInfoHeader
    : () => (
        <Skeleton width={100} height={30} />
      );

  const RightContents = () => <CurrencyDropdown />;

  return (
    <>
      <Header LeftContents={LeftContents} RightContents={RightContents} />
      <main>
        <CoinInfoBody />
      </main>
    </>
  );
}

export default Coin;
