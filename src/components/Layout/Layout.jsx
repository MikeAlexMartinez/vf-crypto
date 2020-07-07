import React from 'react';
import styled from 'styled-components';

import CoinData from '../CoinData/CoinData';
import LastUpdated from '../LastUpdated/LastUpdated';

import { tableRowBorder } from '../../styles/colors';

const AppWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const LastUpdatedContainer = styled.div`
  background-color: white;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 3px 10px;
  border-top-left-radius: 3px;
  border-left: 1px solid ${tableRowBorder};
  border-top: 1px solid ${tableRowBorder};
`;

const Layout = ({ children }) => (
  <CoinData>
    <AppWrapper>
      {children}
      <LastUpdatedContainer>
        <LastUpdated />
      </LastUpdatedContainer>
    </AppWrapper>
  </CoinData>
);

export default Layout;
