import React from 'react';
import styled from 'styled-components';

import { EmptyTh } from '../../Styled';

import {
  tableRowBorder,
  tableHeaderBackground,
} from '../../../styles/colors';

import TableHeadItem from '../TableHeadItem/TableHeadItem';

const borderStyle = `2px solid ${tableRowBorder}`;
const StyledTableHeadRow = styled.tr`
  background-color: ${tableHeaderBackground};
  border-top: ${borderStyle};
  border-bottom: ${borderStyle};
`;

const TableHead = () => {
  return (
    <thead>
      <StyledTableHeadRow>
        <EmptyTh />
        <TableHeadItem>Cryptocurrency</TableHeadItem>
        <TableHeadItem>Price</TableHeadItem>
        <TableHeadItem>Market Cap</TableHeadItem>
        <TableHeadItem align="right">24h Change</TableHeadItem>
        <EmptyTh />
      </StyledTableHeadRow>
    </thead>
  );
};

export default TableHead;
