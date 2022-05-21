const initialState = {
  sorting: 'CHEAPEST',
  filters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORTING':
      return Object.assign({}, state, {
        sorting: action.sorting,
      });
    case 'SET_FILTER':
      const setArr = new Set([...state.filters, ...action.filters]);
      return Object.assign({}, state, {
        filters: [...setArr],
      });

    case 'REMOVE_FILTER':
      const filters = [...state.filters];
      const res = filters.filter((el) => action.filters.indexOf(el) > -1);
      res.forEach((el) => {
        filters.splice(filters.indexOf(el), 1);
      });
      return Object.assign({}, state, {
        filters: [...filters],
      });

    default:
      return state;
  }
};

export default reducer;
