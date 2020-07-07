import styled from 'styled-components';
import {
  infoTitleFontColor,
} from '../../styles/colors';
import { headerHeight } from '../../styles/sizes';
import { emptyStyling } from '../../styles/snippets';

export const EmptyTh = styled.th`${emptyStyling('width')}`;
export const EmptyTd = styled.td`${emptyStyling('width')}`;

export const InfoHeader = styled.h3`
  text-transform: uppercase;
  color: ${infoTitleFontColor};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.03em;
`;

export const BoldedWhitePrice = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: white;
`;

export const StyledSymbol = styled.p`
  padding-left: 10px;
  font-size: ${props => props.size ? props.size : '12px'};
  font-weight: 600;
  color: ${props => props.color ? props.color : '#9BACBD'};
`;

export const CoinInfoContainer = styled.div`
  height: calc(100vh - ${headerHeight});
  width: 100%;
  background: rgb(17,35,61);
  background: linear-gradient(135deg, rgba(17,35,61,1) 0%, rgba(28,50,82,1) 100%);
`;
