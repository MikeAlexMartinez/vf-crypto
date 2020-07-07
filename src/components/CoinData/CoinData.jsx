import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadCoins } from '../../state/coinlist/actions'
import { selectedCurrency } from '../../state/currency/selectors';
import usePolling from '../../hooks/usePolling';

const CoinData = ({ children }) => {
  const dispatch = useDispatch();
  const currency = useSelector(selectedCurrency);

  usePolling((...args) => {
    dispatch(loadCoins(...args))
  }, 60 * 1000, [currency, dispatch]);

  return (
    <>
      {children}
    </>
  );
}

export default CoinData;
