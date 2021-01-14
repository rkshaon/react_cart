const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return {...state, cart: []};
  }
  return state;
}

export default reducer;
