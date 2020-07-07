import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const logoSizes = {
  'sm': '15px',
  'md': '30px',
  'lg': '45px',
  'xlg': '70px',
}

const StyledLogo = styled.h1`
  padding-left: ${props => props.withPadding ? '50px' : 0};
  font-size: ${props => logoSizes[props.size]};
  font-weight: 400;
  letter-spacing: 0.06em;
  color: ${props => props.color};
`;

const Logo = props => {
  return (
    <StyledLogo {...props}>
      VFCrypto
    </StyledLogo>
  );
};

Logo.propTypes = {
  withPadding: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xlg']),
  color: PropTypes.string,
};

Logo.defaultProps = {
  withPadding: false,
  size: 'md',
  color: '#606C84',
};

export default Logo;