import React from 'react';
import classes from './flight-tickets-listing-display.module.scss';
import FlightTicketsListingRenderer from "../flight-tickets-listing-renderer/FlightTicketsListingRenderer.jsx";

export default class FlightTicketsListingDisplay extends React.Component /*({ flightTicketOptions })*/ {

  render() {
    return (
      <div className={classes.flightTicketListingContainer}>
        <FlightTicketsListingRenderer flightTicketOptions={{/*flightTicketOptions*/}} />
        <button className={classes.flightTicketListingContainer__showMore}>Показать еще 5 билетов!</button>
      </div>
    );
  }
}
