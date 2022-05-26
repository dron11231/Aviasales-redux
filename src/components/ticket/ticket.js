import React from 'react';

import FlightInformationTo from '../flightInformationTo/flightInformationTo';
import FlightInformationBack from '../flightInformationBack/flightInformationBack';

import logo from './S7Logo.png';
import classes from './ticket.module.scss';

export default function Ticket({ ticketInfo }) {
  const [ticket, ticketHeader, ticketPrice, ticketLogo, flightInfo] = Object.values(classes);
  const { price, carrier, segments } = ticketInfo;
  return (
    <div className={ticket}>
      <div className={ticketHeader}>
        <span className={ticketPrice}>{price}₽</span>
        <img className={ticketLogo} src={logo} />
      </div>
      <div className={flightInfo}>
        <FlightInformationTo thither={segments[0]} />
        <FlightInformationBack back={segments[1]} />
      </div>
    </div>
  );
}
