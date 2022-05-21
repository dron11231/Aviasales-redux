import React from 'react';

import Header from '../header/header';
import SortFilters from '../sort-filters/sort-filters';
import MoreBtn from '../more-btn/more-btn';
import Tickets from '../tickets/tickets';
import TransferFilters from '../transfer-filters/transfer-filters';

import classes from './app.module.scss';

export default class App extends React.Component {
  componentDidMount() {
    window.addEventListener('resize', () => {
      this.forceUpdate();
    });
  }

  render() {
    if (screen.width > 768) {
      return (
        <div className={classes.container}>
          <Header />
          <TransferFilters store={this.props.store} />
          <main>
            <SortFilters />
            <Tickets />
            <MoreBtn />
          </main>
        </div>
      );
    } else {
      return (
        <div className={classes.container}>
          <Header />
          <main>
            <SortFilters />
            <TransferFilters store={this.props.store} />
            <Tickets />
            <MoreBtn />
          </main>
        </div>
      );
    }
  }
}
