import React from 'react';

import logo from './Logo.svg';
import classes from './header.module.scss';

export default function Header() {
  return (
    <header>
      <img src={logo} className={classes.logo} />
    </header>
  );
}
