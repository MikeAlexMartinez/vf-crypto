import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { InfoHeader } from '../Styled';

import {
  rankBackground,
  rankfontColor,
} from '../../styles/colors';
import { flexCentered } from '../../styles/snippets';

const CoinRankContainer = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;

  @media screen and (min-width: 700px) {
    width: auto;
    flex-grow: 0;
    margin-left: 100px;
  }
`;

const CoinRankBubble = styled.div`
  height: 40px;
  width: 40px;
  margin: 10px;
  background-color: ${rankBackground};
  border-radius: 50%;
  ${flexCentered}
`;

const CoinRankValue = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${rankfontColor};
`;

const CoinRank = ({ rank }) => {
  return (
    <CoinRankContainer>
      <InfoHeader>Rank</InfoHeader>
      <CoinRankBubble>
        <CoinRankValue>{rank}</CoinRankValue>
      </CoinRankBubble>
    </CoinRankContainer>
  );
};

CoinRank.propTypes = {
  rank: PropTypes.number.isRequired,
};

export default CoinRank;
