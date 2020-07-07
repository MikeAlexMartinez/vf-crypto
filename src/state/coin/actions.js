export const CONSTANTS = {
  SELECT_COIN: 'SELECT_COIN',
}

export const selectCoin = (slug) => ({
  type: CONSTANTS.SELECT_COIN,
  payload: slug,
})
