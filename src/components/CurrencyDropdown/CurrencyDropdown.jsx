import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './DropdownOverrides.css'

import {
  availableCurrencies,
  selectedCurrency,
} from '../../state/currency/selectors';
import { selectCurrency } from '../../state/currency/actions';
import { loadCoins } from '../../state/coinlist/actions';

const CurrencyDropdown = () => {
  const currencies = useSelector(availableCurrencies);
  const currency = useSelector(selectedCurrency);
  const dispatch = useDispatch();

  const handleChange = ({ value }) => {
    dispatch(loadCoins(value));
    dispatch(selectCurrency(value));
  };

  return (
    <Dropdown options={currencies} value={currency} onChange={handleChange} />
  );
};

export default CurrencyDropdown;
