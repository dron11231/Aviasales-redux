import React from 'react';

import Ticket from '../ticket/ticket';

import classes from './tickets.module.scss';

export default function Tickets({ tickets, id }) {
  const [ticketsList] = Object.values(classes);
  return (
    <div className={ticketsList}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
  /* const elements = tickets.map((ticket) => {
    return <Ticket key={id} />;
  });
  return <div className={ticketsList}>{elements}</div>; */
}
