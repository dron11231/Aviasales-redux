import React from 'react';

import classes from './flightInformationTo.module.scss';

export default function FlightInformationTo({ thither }) {
  const [flightInformation, detailedInfo, infoTitle, infoText] = Object.values(classes);
  const flightTime = Math.round(thither.duration / 60);
  const stops = thither.stops;
  const stopPoints = stops.join(', ');
  return (
    <div className={flightInformation}>
      <div className={detailedInfo}>
        <span className={infoTitle}>
          {thither.origin} - {thither.destination}
        </span>
        <span className={infoText}>18:00 - 08:00</span>
      </div>
      <div className={detailedInfo}>
        <span className={infoTitle}>В пути</span>
        <span className={infoText}>{flightTime}ч</span>
      </div>
      <div className={detailedInfo}>
        <span className={infoTitle}>Пересадок: {stops.length}</span>
        <span className={infoText}>{stopPoints}</span>
      </div>
    </div>
  );
}
