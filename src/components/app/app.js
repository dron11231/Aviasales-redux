import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Header from '../header/header';
import SortFilters from '../sort-filters/sort-filters';
import MoreBtn from '../more-btn/more-btn';
import Tickets from '../tickets/tickets';
import TransferFilters from '../transfer-filters/transfer-filters';

import classes from './app.module.scss';

class App extends React.Component {
  update = () => {
    this.forceUpdate();
    const { loadingTickets, loadingSearchId, searchId } = this.props.store.getState();
    if (!loadingSearchId) {
      if (loadingTickets === true) {
        this.props.dispatchTickets(searchId);
      }
    }
  };

  componentDidMount() {
    this.props.store.subscribe(this.update);
    this.props.getSearchId();
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
            <Tickets
              tickets={this.props.store.getState().tickets}
              maxTicketsOnPage={this.props.store.getState().maxTicketsOnPage}
            />
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
            <Tickets
              tickets={this.props.store.getState().tickets}
              maxTicketsOnPage={this.props.store.getState().maxTicketsOnPage}
            />
            <MoreBtn />
          </main>
        </div>
      );
    }
  }
}

export default connect(null, actions)(App);
