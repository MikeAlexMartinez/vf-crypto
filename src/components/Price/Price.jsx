import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectedSymbol } from '../../state/currency/selectors'
import { toFixedWithSeparator } from '../../utils/number'

const StyledTd = styled.td`
  padding: 0 10px 0 0;
`

const StyledPrice = styled.p`
  font-size: ${props => props.size === 'lg' ? 20 : 15}px;
`

const StyledPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: ${props => props.leftPad ? '20px' : 0};
`

const StyledSymbol = styled.p`
  padding: 0 10px 0 0;
  font-size: ${props => props.size === 'lg' ? 20 : 15}px;
  color: #9BACBD;
`;

const Price = ({
  leftPad,
  isTable,
  price,
  separator,
  decimals,
  size,
}) => {
  const symbol = useSelector(selectedSymbol);
  const priceContents = () => (
    <StyledPriceContainer leftPad={leftPad}>
      <StyledSymbol size={size}>{symbol}</StyledSymbol>
      <StyledPrice size={size}>{toFixedWithSeparator(price, decimals, separator)}</StyledPrice>
    </StyledPriceContainer>
  );

  return isTable
    ? (
        <StyledTd>
          {priceContents()}
        </StyledTd>
      )
    : priceContents();
};

Price.propTypes = {
  leftPad: PropTypes.bool,
  isTable: PropTypes.bool,
  price: PropTypes.number,
  separator: PropTypes.string,
  decimals: PropTypes.number,
  size: PropTypes.oneOf(['lg', 'md']),
};

Price.defaultProps = {
  leftPad: false,
  isTable: false,
  price: '0.00',
  size: 'lg',
  separator: ',',
  decimals: 0,
}

export default Price;