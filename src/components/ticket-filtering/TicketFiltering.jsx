import React from 'react';
import classNames from 'classnames';
import classes from './ticket-filtering.module.scss';

export default class TicketFiltering extends React.Component {

  render() {
    return (
      <div className={classes.ticketFilteringContainer}>
        <button className={classNames(classes.ticketFilteringContainer__button, classes.active)}>Самый дешевый</button>
        <button className={classes.ticketFilteringContainer__button}>Самый быстрый</button>
        <button className={classes.ticketFilteringContainer__button}>Оптимальный</button>
      </div>
    );
  }
}
