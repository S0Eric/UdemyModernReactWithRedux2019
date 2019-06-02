export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'FETCH_USER':
      return { ...state, [payload.id]: payload };
    default:
      return state;
  }
}
