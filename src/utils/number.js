/**
 * takes a number and returns separated string representation with
 * defined number of decimal places
 * 
 * @param {number} number 
 * @param {string} separator 
 * @param {number} decimals 
 * @returns {string}
 */
export const toFixedWithSeparator = (number, decimals = 0, separator = ',') => {
  const fixed = number.toFixed(decimals);
  return fixed.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};
