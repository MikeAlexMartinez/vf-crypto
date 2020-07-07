import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { headerHeight } from '../../styles/sizes';
import { emptyStyling } from '../../styles/snippets';

const NavBar = styled.nav`
  width: 100%;
  height: ${headerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftContentsContainer = styled.div`
  margin: 0;
`

const RightContentsContainer = styled.div`
  ${emptyStyling('margin-right')}
`;

const Header = ({ LeftContents, RightContents }) => (
  <NavBar>
    <LeftContentsContainer>
      <LeftContents />
    </LeftContentsContainer>
    <RightContentsContainer>
      <RightContents />
    </RightContentsContainer>
  </NavBar>
)

Header.propTypes = {
  LeftContents: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  RightContents: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
}

Header.defaultProps = {
  LeftContents: () => <div className="left-placeholder" />,
  RightContents: () => <div className="right-placeholder" />,
}

export default Header;
