import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoMdArrowDown, IoMdArrowUp } from 'react-icons/io'
import { toFixedWithSeparator } from '../../utils/number'

const StyledTd = styled.td`
  padding: 0;
`;

const StyledValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const StyledValue = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${props => props.color};
`;

const upDownOrStill = (change, up, down, still = null) =>
  change > 0
    ? up
    : change < 0
    ? down
    : still;

const PercentChange = ({ percentChange }) => {
  const Arrow = upDownOrStill(percentChange, IoMdArrowUp, IoMdArrowDown);
  const color = upDownOrStill(percentChange, '#1AC17A', '#d81923', '#000');

  return (
    <StyledTd>
      <StyledValueContainer>
        <StyledValue color={color}>{toFixedWithSeparator(percentChange, 2)}%</StyledValue>
        <Arrow color={color} />
      </StyledValueContainer>
    </StyledTd>
  );
};

PercentChange.propTypes = {
  percentChange: PropTypes.number,
};

PercentChange.defaultProps = {
  percentChange: 0,
}

export default PercentChange;
