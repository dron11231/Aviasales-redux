const initialState = {
  sorting: null,
  filters: [],
  tickets: [],
  filteredTickets: [],
  searchId: null,
  loadingSearchId: true,
  loadingTickets: true,
  maxTicketsOnPage: 5,
};

const filtersHandler = (state, transfers) => {
  let tickets = [];
  state.tickets.forEach((el) => {
    if (el.segments[0].stops.length === transfers && el.segments[1].stops.length === transfers) {
      tickets.push(el);
    }
  });
  return tickets;
};

const visibilityHandler = (state = {}) => {
  let newArr = [];
  if (state.filters.find((el) => el === 'ALL' || state.filters.length === 4)) {
    newArr = [...state.tickets];
    return newArr;
  }
  if (state.filters.find((el) => el === 'NON_STOP')) {
    newArr = [...newArr, ...filtersHandler(state, 0)];
  }

  if (state.filters.find((el) => el === 'ONE_TRANSFER')) {
    newArr = [...newArr, ...filtersHandler(state, 1)];
  }

  if (state.filters.find((el) => el === 'TWO_TRANSFER')) {
    newArr = [...newArr, ...filtersHandler(state, 2)];
  }

  if (state.filters.find((el) => el === 'THREE_TRANSFER')) {
    newArr = [...newArr, ...filtersHandler(state, 3)];
  }

  return newArr;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_TICKETS': {
      const setArr = new Set([...visibilityHandler(state)]);
      return Object.assign({}, state, {
        filteredTickets: [...setArr],
      });
    }

    case 'SET_SORTING':
      let newArr = [...state.filteredTickets];
      if (action.sorting === 'CHEAPEST') {
        newArr = newArr.sort(function (a, b) {
          return a.price - b.price;
        });
      }
      if (action.sorting === 'FASTEST') {
        newArr = newArr.sort(function (a, b) {
          const totalDurationA = a.segments[0].duration + a.segments[1].duration;
          const totalDurationB = b.segments[0].duration + b.segments[1].duration;
          return totalDurationA - totalDurationB;
        });
      }
      if (action.sorting === 'OPTIMAL') {
        newArr = newArr.sort(function (a, b) {
          const totalA = a.segments[0].duration + a.segments[1].duration + a.price;
          const totalB = b.segments[0].duration + b.segments[1].duration + b.price;
          return totalA - totalB;
        });
      }
      return Object.assign({}, state, {
        sorting: action.sorting,
        filteredTickets: newArr,
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

    case 'ADD_TICKETS': {
      return Object.assign({}, state, {
        tickets: [...state.tickets, ...action.tickets],
      });
    }

    case 'ADD_SEARCH_ID': {
      return Object.assign({}, state, {
        searchId: action.searchId,
        loadingSearchId: action.loadingSearchId,
      });
    }

    case 'SET_LOADING_TICKETS_STATUS': {
      return Object.assign({}, state, {
        loadingTickets: action.loadingTickets,
      });
    }

    case 'SHOW_MORE_TICKETS': {
      return Object.assign({}, state, {
        maxTicketsOnPage: state.maxTicketsOnPage + 5,
      });
    }

    default:
      return state;
  }
};

export default reducer;
