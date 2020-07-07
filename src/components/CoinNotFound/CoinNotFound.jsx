import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Logo from '../Logo/Logo';

import { topTenSlugs } from '../../state/coinlist/selectors';

import { CoinInfoContainer } from '../Styled';

const NotFoundCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledNotFound = styled.p`
  color: white;
  margin-bottom: 20px;
`;

const Centered = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const CoinLinkColContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CoinLinkCol = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CoinLink = styled.h4`
  text-align: center;
  width: 200px;
  text-transform: capitalize;
  color: white;
  text-decoration: underline;

  &&:hover {
    cursor: pointer;
  }
`;

const CoinList = ({ coinSlugs }) => coinSlugs.map(slug => (
  <Link key={slug} to={`/coin/${slug}`}>
    <CoinLink>{slug}</CoinLink>
  </Link>
));

const CoinNotFound = () => {
  const slugList = useSelector(topTenSlugs);
  const leftCol = slugList.slice(0, 5);
  const rightCol = slugList.slice(5);

  return (
    <CoinInfoContainer>
      <NotFoundCol>
        <Centered>
          <Logo size="xlg" />
        </Centered>
        <Centered>
          <StyledNotFound>Coin not found - Try one of the Top Ten Below</StyledNotFound>
        </Centered>
        <Centered>
          <CoinLinkColContainer>
            <CoinLinkCol>
              <CoinList coinSlugs={leftCol} />
            </CoinLinkCol>
            <CoinLinkCol>
              <CoinList coinSlugs={rightCol} />
            </CoinLinkCol>
          </CoinLinkColContainer>
        </Centered>
      </NotFoundCol>
    </CoinInfoContainer>
  );
};

export default CoinNotFound;
