import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

import { coinFoundStatus } from '../../state/selectors';
import { selectCoin } from '../../state/coin/actions';
import { selectedCoin } from '../../state/coin/selectors';

import CoinStats from '../CoinStats/CoinStats';
import { CoinInfoContainer } from '../Styled'
import CoinNotFound from '../CoinNotFound/CoinNotFound';

const InitialLoadingContainer = styled.div`
  display: flex;
`;

const InitialLoadBody = () => (
  <InitialLoadingContainer>
    <Skeleton count={3} />
  </InitialLoadingContainer>
)

const CoinInfoBody = () => {
  const { coinName } = useParams()
  const coin = useSelector(selectedCoin);
  const { initialLoad, notFound } = useSelector(coinFoundStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (coin !== coinName) {
      dispatch(selectCoin(coinName));
    }
  }, [coin, coinName, dispatch, notFound])

  return (
    <CoinInfoContainer>
      {initialLoad && <InitialLoadBody />}
      {!notFound && <CoinStats />}
      {!initialLoad && notFound && (
        <CoinNotFound />
      )}
    </CoinInfoContainer>
  );
};

export default CoinInfoBody;
