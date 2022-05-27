import React from 'react';

import classes from './info-message.module.scss';

const InfoMessage = () => {
  return (
    <div className={classes['info-message']}>
      <span>Похоже, под заданные фильтры не было найдено билетов</span>
    </div>
  );
};

export default InfoMessage;
