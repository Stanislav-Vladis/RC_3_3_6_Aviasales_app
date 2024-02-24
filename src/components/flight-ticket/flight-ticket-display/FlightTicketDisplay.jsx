import React from 'react';
import airlines from '../../../assets/airlines.svg';
import classes from './flight-ticket-display.module.scss';
import FlightTicketDetails from "../flight-ticket-details/FlightTicketDetails.jsx";

export default class FlightTicketDisplay extends React.Component {

  render() {
    return (
      <div className={classes.flightCardContainer}>
        <div className={classes.flightInfoContainer}>
          <p className={classes.flightInfoContainer__price}>13 400P</p>
          <div className={classes.flightInfoContainer__airline}>
            <img className={classes.flightInfoContainer__logo} alt="airline" src={airlines} />
          </div>
        </div>
        <FlightTicketDetails />
      </div>
    );
  }
}
