import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions.js';

import classes from './more-btn.module.scss';

function MoreBtn({ showMoreTickets }) {
  return (
    <button onClick={showMoreTickets} className={classes['more-btn']}>
      ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
    </button>
  );
}

export default connect(null, actions)(MoreBtn);
