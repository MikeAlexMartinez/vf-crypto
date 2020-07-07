import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { headerFontColor } from '../../../styles/colors';
import { smallHeaderFont } from '../../../styles/sizes';

const StyledTh = styled.th`
  padding: ${smallHeaderFont} 0;
  text-align: ${props => props.align};
  text-transform: uppercase;
  font-size: ${smallHeaderFont};
  color: ${headerFontColor};
`;

const TableHeadItem = ({ children, align }) => {
  return (
    <StyledTh align={align}>
      {children}
    </StyledTh>
  );
};

TableHeadItem.propTypes = {
  text: PropTypes.string,
  align: PropTypes.oneOf(['center', 'left', 'right', 'justify']),
};

TableHeadItem.defaultProps = {
  text: '',
  align: 'left',
};

export default TableHeadItem;