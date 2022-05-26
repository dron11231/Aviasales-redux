import React from 'react';

import classes from '../flightInformationTo/flightInformationTo.module.scss';

export default function FlightInformationBack({ back }) {
  const [flightInformation, detailedInfo, infoTitle, infoText] = Object.values(classes);
  const flightTime = Math.round(back.duration / 60);
  const stops = back.stops;
  const stopPoints = stops.join(', ');
  return (
    <div className={flightInformation}>
      <div className={detailedInfo}>
        <span className={infoTitle}>
          {back.origin} - {back.destination}
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
