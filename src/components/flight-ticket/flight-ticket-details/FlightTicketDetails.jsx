import React from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import classes from './flight-ticket-details.module.scss';

export default class FlightTicketDetails extends React.Component {
  static propTypes = {
    ticketInfo: PropTypes.object
  };

  flightTicketDetailsBuilder() {
    const flights = [];

    function build() {
      const flightsHtml = flights.map((flight, index) => (
        <div key={index} className={classNames(classes.flightTicketDetailsContainer__info, flight.plusClassName)}>
          <p className={classes.flightTicketDetailsContainer__infoHeading}>{flight.heading}</p>
          <p className={classes.flightTicketDetailsContainer__infoText}>{flight.text}</p>
        </div>
      ));

      return (<div className={classes.flightTicketDetailsContainer__flight}>{flightsHtml}</div>);
    }

    function addFlightInfo(plusClassName, heading, text) {
      flights.push({ plusClassName, heading, text });
      return { addFlightInfo, build };
    }

    return { addFlightInfo, build };
  }

  transfers(countTransfers) {
    if (countTransfers === 0) {
      return 'Без пересадок';
    }
    if (countTransfers === 1) {
      return '1 пересадка';
    }
    return `${countTransfers} пересадки`;
  }

  render() {
    const { ticketInfo } = this.props;

    return (
      <div className={classes.flightTicketDetailsContainer}>
        {
          this.flightTicketDetailsBuilder()
          .addFlightInfo(classes.fromToWhere, ticketInfo.routeTo, ticketInfo.flightHoursTo)
          .addFlightInfo(classes.journey, 'В пути', ticketInfo.travelTimeTo)
          .addFlightInfo(classes.transfers, this.transfers(ticketInfo.countTransfersTo), ticketInfo.transfersTo)
          .build()
        }
        {
          this.flightTicketDetailsBuilder()
            .addFlightInfo(classes.fromToWhere, ticketInfo.routeFrom, ticketInfo.flightHoursFrom)
            .addFlightInfo(classes.journey, 'В пути', ticketInfo.travelTimeFrom)
            .addFlightInfo( classes.transfers, this.transfers(ticketInfo.countTransfersFrom), ticketInfo.transfersFrom)
            .build()
        }
      </div>
    );
  }
}
