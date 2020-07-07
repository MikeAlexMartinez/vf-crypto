import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import { IoMdArrowRoundBack } from 'react-icons/io';

import {
  headerHeight,
  circularButtonHeight,
} from '../../styles/sizes';
import {
  backBtnBackground,
  backBtnIconColor,
} from '../../styles/colors';

const BackBtnContainer = styled.div`
  height: ${headerHeight};
  width: ${headerHeight};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackBtn = styled.button`
  border: none;
  height: ${circularButtonHeight};
  border-radius: 50%;
  background-color: ${backBtnBackground};
  display: flex;
  justify-content: center;
  align-items: center;

  &&:hover {
    cursor: pointer;
  }

  &&:active {
    outline: none;
  }
`;

const BackButton = ({ backTo }) => {
  const history = useHistory();

  return (
    <BackBtnContainer>
      <BackBtn onClick={() => {
        if (backTo) {
          history.push(backTo);
        } else {
          history.goBack();
        }
      }}>
        <IoMdArrowRoundBack color={backBtnIconColor} size="1.2em" />
      </BackBtn>
    </BackBtnContainer>
  );
};

BackButton.propTypes = {
  backTo: PropTypes.string,
};

BackButton.defaultProps = {
  backTo: '',
};

export default BackButton;
