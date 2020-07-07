import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { selectedCoinBodyData } from '../../state/selectors';
import { selectedSymbol } from '../../state/currency/selectors';
import { toFixedWithSeparator } from '../../utils/number'

import CoinRank from '../CoinRank/CoinRank';
import {
  InfoHeader,
  BoldedWhitePrice,
  StyledSymbol,
} from '../Styled';

import {
  symbolFontColor,
  infoTitleFontColor,
} from '../../styles/colors'

const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

const CurrencySymbol = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-right: 10px;
  color: ${infoTitleFontColor};
`;

const CoinStatsRow = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

const MainStatsContainer = styled.div`
  flex-grow: 1;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
`;

const MainStatsRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StatInner = styled.div`
  display: flex;
  align-items: center;
`;

const Stat = ({ headerText, children }) => (
  <SkeletonTheme color={infoTitleFontColor}>
    <StatContainer>
      <InfoHeader>{headerText}</InfoHeader>
      <StatInner>
        {children}
      </StatInner>
    </StatContainer>
  </SkeletonTheme>
)

const CoinStats = () => {
  const {
    quoteLoading,
    rank,
    marketCap,
    volume24h,
    circulatingSupply,
    totalSupply,
    symbol,
  } = useSelector(selectedCoinBodyData);
  const currencySymbol = useSelector(selectedSymbol);

  return (
    <CoinStatsRow>
      <CoinRank rank={rank} />
      <MainStatsContainer>
        <MainStatsRow>
          <Stat headerText="Market Cap">
            <CurrencySymbol>{currencySymbol}</CurrencySymbol>
            {quoteLoading && <Skeleton width={100} height={20} />}
            {!quoteLoading && (
              <BoldedWhitePrice>{toFixedWithSeparator(marketCap)}</BoldedWhitePrice>
            )}
          </Stat>
          <Stat headerText="Circulating Supply">
            {quoteLoading && <Skeleton width={100} height={20} />}
            {!quoteLoading && (
              <BoldedWhitePrice>{toFixedWithSeparator(circulatingSupply)}</BoldedWhitePrice>
            )}
            <StyledSymbol size="13px" color={symbolFontColor}>{symbol}</StyledSymbol>
          </Stat>
        </MainStatsRow>
        <MainStatsRow>
          <Stat headerText="24h Volume">
            <CurrencySymbol>{currencySymbol}</CurrencySymbol>
            {quoteLoading && <Skeleton width={100} height={20} />}
            {!quoteLoading && (
              <BoldedWhitePrice>{toFixedWithSeparator(volume24h)}</BoldedWhitePrice>
            )}
          </Stat>
          <Stat headerText="Total Supply">
            {quoteLoading && <Skeleton width={100} height={20} />}
            {!quoteLoading && (
              <BoldedWhitePrice>{toFixedWithSeparator(totalSupply)}</BoldedWhitePrice>
            )}
            <StyledSymbol size="13px" color={symbolFontColor}>{symbol}</StyledSymbol>
          </Stat>
        </MainStatsRow>
      </MainStatsContainer>
    </CoinStatsRow>
  );
};

export default CoinStats;
