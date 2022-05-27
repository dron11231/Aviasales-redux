const sorting = (sorting) => {
  return {
    type: 'SET_SORTING',
    sorting: sorting,
  };
};

const filterTickets = (all) => {
  return {
    type: 'FILTER_TICKETS',
    all: all,
  };
};

const setFilter = (filter) => {
  const filters = [];
  if (filter === 'ALL') {
    filters.push('ALL', 'NON_STOP', 'ONE_TRANSFER', 'TWO_TRANSFER', 'THREE_TRANSFER');
  } else {
    filters.push(filter);
  }
  return {
    type: 'SET_FILTER',
    filters: filters,
  };
};

const removeFilter = (filter) => {
  const filters = [];
  if (filter === 'ALL') {
    filters.push('ALL', 'NON_STOP', 'ONE_TRANSFER', 'TWO_TRANSFER', 'THREE_TRANSFER');
  } else {
    filters.push(filter, 'ALL');
  }
  return {
    type: 'REMOVE_FILTER',
    filters: filters,
  };
};

const getSearchId = () => async (dispatch) => {
  try {
    let searchId = await fetch('https://aviasales-test-api.kata.academy/search');
    searchId = await searchId.json();
    searchId = searchId.searchId;
    dispatch({
      type: 'ADD_SEARCH_ID',
      searchId: searchId,
      loadingSearchId: false,
    });
  } catch (e) {
    //
  }
};

const getTickets = async (searchId) => {
  try {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
    const responseJson = await response.json();
    return responseJson;
  } catch (e) {
    //
  }
};

const addTickets = (tickets) => {
  return {
    type: 'ADD_TICKETS',
    tickets: tickets,
  };
};

const setLoadingTicketsStatus = (status) => {
  return {
    type: 'SET_LOADING_TICKETS_STATUS',
    loadingTickets: status,
  };
};

const showMoreTickets = () => {
  return {
    type: 'SHOW_MORE_TICKETS',
  };
};

const dispatchTickets = (searchId) => {
  let stop = false;
  return async function disp(dispatch) {
    // eslint-disable-next-line for-direction
    try {
      if (stop === false) {
        if (stop !== true) {
          const response = await getTickets(searchId);
          stop = response.stop;
          dispatch(addTickets(response.tickets));
        }
      }
    } catch (e) {
      if (stop !== true) {
        dispatchTickets(searchId)(dispatch);
      }
    } finally {
      if (stop === true) {
        dispatch(setLoadingTicketsStatus(false));
      }
    }
  };
};

export {
  sorting,
  setFilter,
  filterTickets,
  removeFilter,
  dispatchTickets,
  getSearchId,
  setLoadingTicketsStatus,
  showMoreTickets,
};
