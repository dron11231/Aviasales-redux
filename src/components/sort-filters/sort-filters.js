import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import classes from './sort-filters.module.scss';

const [mainFilters, btn, activeBtn] = Object.values(classes);
class SortFilters extends React.Component {
  componentDidMount() {
    const container = document.querySelector('.' + mainFilters);
    const btns = document.querySelectorAll('.' + btn);

    container.addEventListener('click', (e) => {
      const button = e.target;
      if (button.classList.contains(btn)) {
        if (!button.classList.contains(activeBtn)) {
          btns.forEach((el) => el.classList.remove(activeBtn));
          button.classList.add(activeBtn);
        }
      }
    });
  }

  render() {
    const { sorting } = this.props;
    return (
      <div className={mainFilters}>
        <button
          onClick={(e) => {
            sorting('CHEAPEST');
          }}
          className={btn}
        >
          САМЫЙ ДЕШЕВЫЙ
        </button>
        <button
          onClick={() => {
            sorting('FASTEST');
          }}
          className={btn}
        >
          САМЫЙ БЫСТРЫЙ
        </button>
        <button
          onClick={() => {
            sorting('OPTIMAL');
          }}
          className={btn}
        >
          ОПТИМАЛЬНЫЙ
        </button>
      </div>
    );
  }
}

export default connect(null, actions)(SortFilters);
