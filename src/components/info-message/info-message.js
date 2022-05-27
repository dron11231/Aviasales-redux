import React from 'react';

import classes from './info-message.module.scss';

const InfoMessage = () => {
  return (
    <div className={classes['info-message']}>
      <span>Рейсов, подходящих под заданные фильтры, не найдено</span>
    </div>
  );
};

export default InfoMessage;
