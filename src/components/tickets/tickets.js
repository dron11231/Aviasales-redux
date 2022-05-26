import React from 'react';
import { connect } from 'react-redux';

import Ticket from '../ticket/ticket';

import classes from './tickets.module.scss';

export default function Tickets({ tickets, maxTicketsOnPage }) {
  const [ticketsList] = Object.values(classes);
  let id = 1;
  const elements = tickets.map((ticket, idx) => {
    id++;
    if (idx < maxTicketsOnPage) {
      return <Ticket key={id} ticketInfo={ticket} />;
    }
  });
  return <div className={ticketsList}>{elements}</div>;

  /* const elements = tickets.map((ticket) => {
    return <Ticket key={id} />;
  });
  return <div className={ticketsList}>{elements}</div>; */
}
