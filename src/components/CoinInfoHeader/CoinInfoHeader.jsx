import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectedCoinHeaderData } from '../../state/selectors';
import Skeleton from 'react-loading-skeleton';
import BackBtn from '../BackBtn/BackBtn';
import CoinName from '../CoinName/CoinName';
import Price from '../Price/Price';

const CoinInfoHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const SkeletonContainer = styled.div`
  padding-left: 20px;
`;

const CoinInfoHeader = () => {
  const { quoteLoading, logo, name, symbol, price, notFound } = useSelector(selectedCoinHeaderData)

  return (
    <CoinInfoHeaderContainer>
      <BackBtn backTo="/" />
      {!notFound && (
        <>
          <CoinName logo={logo} name={name} symbol={symbol} size="lg" />
          {quoteLoading && (
            <SkeletonContainer>
              <Skeleton width={100} height={20} />
            </SkeletonContainer>
          )}
          {!quoteLoading && <Price price={price} decimals={2} leftPad />}
        </>
      )}
    </CoinInfoHeaderContainer>
  );
};

export default CoinInfoHeader;
