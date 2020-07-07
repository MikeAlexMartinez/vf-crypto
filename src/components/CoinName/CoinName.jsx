import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { StyledSymbol } from '../Styled';

const StyledTd = styled.td`
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledRankContainer = styled.div`
  width: 20px;
`;

const StyledRank = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #9BACBD;
`;

const StyledImg = styled.img`
  height: ${props => props.size === 'lg' ? '40px' : '30px'};
  object-fit: fill;
  padding: 0 ${props => props.size === 'lg' ? '15px' : '30px'};
  padding-left: ${props => props.size === 'lg' ? '0px' : '30px'};
`

const StyledNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const StyledName = styled.h2`
  margin: 0;
  letter-spacing: 0.1em;
  font-size: 20px;
  font-weight: 300;
`;

const CoinName = ({ isTable, rank, logo, name, symbol, size }) => {
  const CoinNameContents = () => (
    <>
      {rank && (
        <StyledRankContainer>
          <StyledRank>{rank}</StyledRank>
        </StyledRankContainer>
      )}
      <StyledImg src={logo} alt={`${name} logo`} size={size} />
      <StyledNameContainer>
        <StyledName>{name}</StyledName>
        {symbol && <StyledSymbol>{symbol}</StyledSymbol>}
      </StyledNameContainer>
    </>
  )
  
  return isTable ? (
    <StyledTd>
      <CoinNameContents />
    </StyledTd>
  ) : (
    <>
      <CoinNameContents />
    </>
  );
};

CoinName.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isTable: PropTypes.bool,
  rank: PropTypes.number,
  symbol: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'md']),
};

CoinName.defaultProps = {
  isTable: false,
  rank: undefined,
  size: 'md',
  symbol: '',
}

export default CoinName;
