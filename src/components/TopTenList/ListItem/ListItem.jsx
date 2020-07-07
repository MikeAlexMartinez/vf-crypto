import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Skeleton from 'react-loading-skeleton';
import CoinName from '../../CoinName/CoinName';
import Price from '../../Price/Price';
import { EmptyTd } from '../../Styled';
import PercentChange from '../../PercentChange/PercentChange';
import { selectCoin } from '../../../state/coin/actions';

const StyledRow = styled.tr`
  border-bottom: 1px solid #EEF0F5;

  &&:hover {
    cursor: pointer;
    background-color: #EEF0F5;
  }
`;

const SkeletonTd = () => (
  <td>
    <Skeleton />
  </td>
);

const ListItem = ({
  rank,
  logo,
  slug,
  name,
  price,
  quoteLoading,
  marketCap,
  percentChange24h,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const navigateToCoin = () => {
    dispatch(selectCoin(slug));
    history.push(`/coin/${slug}`);
  }

  const Financials = () => quoteLoading
    ? (
      <>
        <SkeletonTd />
        <SkeletonTd />
        <SkeletonTd />
      </>
    )
    : (
      <>
        <Price price={price} decimals={2} isTable />
        <Price price={marketCap} size="md" isTable />
        <PercentChange percentChange={percentChange24h} />
      </>
    );

  return (
    <StyledRow onClick={navigateToCoin}>
      <EmptyTd />
      <CoinName isTable logo={logo} rank={rank} name={name} />
      <Financials />
      <EmptyTd />
    </StyledRow>
  );
};

ListItem.propTypes = {
  rank: PropTypes.number.isRequired,
  logo: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  marketCap: PropTypes.number.isRequired,
  percentChange24h: PropTypes.number.isRequired,
};

export default ListItem;
