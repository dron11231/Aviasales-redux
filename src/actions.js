const sorting = (sorting) => {
  return {
    type: 'SET_SORTING',
    sorting: sorting,
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

export { sorting, setFilter, removeFilter };
