import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Header from '../header/header';
import SortFilters from '../sort-filters/sort-filters';
import MoreBtn from '../more-btn/more-btn';
import Tickets from '../tickets/tickets';
import TransferFilters from '../transfer-filters/transfer-filters';
import Spinner from '../spinner/spinner';
import InfoMessage from '../info-message/info-message';

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
    const { loadingTickets, filteredTickets } = this.props.store.getState();
    let spinner = loadingTickets ? <Spinner /> : null;
    let infoMessage = null;
    if (filteredTickets.length === 0) infoMessage = <InfoMessage />;

    if (screen.width > 768) {
      return (
        <div className={classes.container}>
          <Header />
          <TransferFilters store={this.props.store} />
          <main>
            <SortFilters filteredTickets={this.props.store.getState().filteredTickets} />
            {spinner}
            {infoMessage}
            <Tickets
              tickets={this.props.store.getState().filteredTickets}
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
            <SortFilters filteredTickets={this.props.store.getState().filteredTickets} />
            <TransferFilters store={this.props.store} />
            {spinner}
            {infoMessage}
            <Tickets
              tickets={this.props.store.getState().filteredTickets}
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
