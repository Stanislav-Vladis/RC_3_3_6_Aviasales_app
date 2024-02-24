import React from 'react';
import classes from './flight-tickets-listing-renderer.module.scss';
import FlightTicketDisplay from "../flight-ticket-display/FlightTicketDisplay.jsx";

export default class FlightTicketsListingRenderer extends React.Component /*({ flightTicketOptions })*/ {

  render() {
    return (
      <div className={classes.flightTicketListingContainer__tickets}>
        {/*{flightTicketOptions.map((data, index) => {
        return <FlightTicketDisplay {...data} key={index} />;
      })}*/}
        <FlightTicketDisplay />
        <FlightTicketDisplay />
        <FlightTicketDisplay />
      </div>
    );
  }
}
