import React from 'react';
import PropTypes from "prop-types";
import classes from './flight-ticket-display.module.scss';
import FlightTicketDetails from "../flight-ticket-details/FlightTicketDetails.jsx";

export default class FlightTicketDisplay extends React.Component {
  static propTypes = {
    ticketInfo: PropTypes.object
  };

  render() {
    const { ticketInfo } = this.props;

    return (
      <div className={classes.flightCardContainer}>
        <div className={classes.flightInfoContainer}>
          <p className={classes.flightInfoContainer__price}>{ticketInfo.price}P</p>
          <div className={classes.flightInfoContainer__airline}>
            <img className={classes.flightInfoContainer__logo} alt="airline" src={ticketInfo.logo} />
          </div>
        </div>
        <FlightTicketDetails ticketInfo={ticketInfo} />
      </div>
    );
  }
}
