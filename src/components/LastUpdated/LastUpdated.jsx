import React from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns'
import {
  lastUpdated,
  isTopTenLoading,
} from '../../state/coinlist/selectors';

const LastUpdated = () => {
  const lastUpdatedTime = useSelector(lastUpdated);
  const isLoading = useSelector(isTopTenLoading);

  return (
    <>
      {isLoading && (<span>Loading... </span>)}
      {lastUpdatedTime && (
        <span>Coin Data Last Updated: {format(new Date(lastUpdatedTime), 'dd/MM/yy H:mm')}</span>
      )}
    </>
  );
};

export default LastUpdated;
