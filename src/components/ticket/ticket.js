import React from 'react';

import FlightInformation from '../flightInformation/flightInformation';

import logo from './S7Logo.png';
import classes from './ticket.module.scss';

export default function Ticket() {
  const [ticket, ticketHeader, ticketPrice, ticketLogo, flightInfo] = Object.values(classes);
  return (
    <div className={ticket}>
      <div className={ticketHeader}>
        <span className={ticketPrice}>13600</span>
        <img className={ticketLogo} src={logo} />
      </div>
      <div className={flightInfo}>
        <FlightInformation />
        <FlightInformation />
      </div>
    </div>
  );
}
