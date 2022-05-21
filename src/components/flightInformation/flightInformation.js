import React from 'react';

import classes from './flightInformation.module.scss';

export default function FlightInformation() {
  const [flightInformation, detailedInfo, infoTitle, infoText] = Object.values(classes);
  return (
    <div className={flightInformation}>
      <div className={detailedInfo}>
        <span className={infoTitle}>MOW - HKT</span>
        <span className={infoText}>10:45 - 08:00</span>
      </div>
      <div className={detailedInfo}>
        <span className={infoTitle}>В пути</span>
        <span className={infoText}>21ч</span>
      </div>
      <div className={detailedInfo}>
        <span className={infoTitle}>2 пересадки</span>
        <span className={infoText}>HKG, JNB</span>
      </div>
    </div>
  );
}
