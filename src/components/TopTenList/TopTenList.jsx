import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

import ListItem from './ListItem/ListItem';
import TableHead from './TableHead/TableHead';

import { topTenListing } from '../../state/selectors'
import { isTopTenLoading, topTenErrorMessage } from '../../state/coinlist/selectors';

const StyledTable = styled.table`
  width: 100%;
`;

const tenRows = () => new Array(10).fill('a');

const TopTenList = () => {
  const topTen = useSelector(topTenListing);
  const isLoading = useSelector(isTopTenLoading);
  const errorMessage = useSelector(topTenErrorMessage);

  return (
    <>
      <StyledTable>
        <TableHead isLoading={isLoading} errorMessage={errorMessage} />
        {topTen.length > 0 && (
          <tbody>
            {topTen.map((currency) => (
              <ListItem key={currency.slug} {...currency} />
            ))}
          </tbody>
        )}
        {isLoading && topTen.length === 0 && (
          <tbody>
            {tenRows().map((v, i) => (
              <tr key={v + i}>
                <td colSpan="6">
                  <Skeleton width={'100vw'} height={'48px'} />
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </StyledTable>
    </>
  );
};

export default TopTenList;
