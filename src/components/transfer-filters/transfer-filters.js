import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import classes from './transfer-filters.module.scss';

const [filters, title, filterList, filter, checkbox] = Object.values(classes);

class TransferFilters extends React.Component {
  updateFilters = () => {
    const state = this.props.store.getState();
    const checkboxes = document.querySelectorAll('.' + checkbox);
    const activeFilters = state.filters;
    if (activeFilters.length === 0) {
      checkboxes.forEach((el) => (el.checked = false));
    }
    if (activeFilters.indexOf('ALL') !== -1) {
      checkboxes.forEach((el) => (el.checked = true));
    } else if (activeFilters.indexOf('ALL') === -1 && activeFilters.length === 4) {
      document.getElementById('ALL').checked = true;
    } else {
      document.getElementById('ALL').checked = false;
    }
  };

  componentDidMount() {
    this.props.store.subscribe(this.updateFilters);
  }

  render() {
    const { setFilter, removeFilter } = this.props;
    return (
      <div className={filters}>
        <h2 className={title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
        <ul className={filterList}>
          <li className={filter}>
            <input
              type="checkbox"
              id="ALL"
              onChange={(e) => {
                if (e.target.checked) {
                  setFilter('ALL');
                } else {
                  removeFilter('ALL');
                }
              }}
              className={checkbox}
            />
            <label htmlFor="ALL">
              <span>Все</span>
            </label>
          </li>
          <li className={filter}>
            <input
              type="checkbox"
              id="NON_STOP"
              onChange={(e) => {
                if (e.target.checked) {
                  setFilter('NON_STOP');
                } else {
                  removeFilter('NON_STOP');
                }
              }}
              className={checkbox}
            />
            <label htmlFor="NON_STOP">
              <span>Без пересадок</span>
            </label>
          </li>
          <li className={filter}>
            <input
              type="checkbox"
              id="ONE_TRANSFER"
              onChange={(e) => {
                if (e.target.checked) {
                  setFilter('ONE_TRANSFER');
                } else {
                  removeFilter('ONE_TRANSFER');
                }
              }}
              className={checkbox}
            />
            <label htmlFor="ONE_TRANSFER">
              <span>1 пересадка</span>
            </label>
          </li>
          <li className={filter}>
            <input
              type="checkbox"
              id="TWO_TRANSFER"
              onChange={(e) => {
                if (e.target.checked) {
                  setFilter('TWO_TRANSFER');
                } else {
                  removeFilter('TWO_TRANSFER');
                }
              }}
              className={checkbox}
            />
            <label htmlFor="TWO_TRANSFER">
              <span>2 пересадки</span>
            </label>
          </li>
          <li className={filter}>
            <input
              type="checkbox"
              id="THREE_TRANSFER"
              onChange={(e) => {
                if (e.target.checked) {
                  setFilter('THREE_TRANSFER');
                } else {
                  removeFilter('THREE_TRANSFER');
                }
              }}
              className={checkbox}
            />
            <label htmlFor="THREE_TRANSFER">
              <span>3 пересадки</span>
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(null, actions)(TransferFilters);
