import React from 'react';
import classNames from 'classnames';
import classes from './flight-ticket-details.module.scss';

export default class FlightTicketDetails extends React.Component {

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

  render() {
    return (
      <div className={classes.flightTicketDetailsContainer}>
        {
          this.flightTicketDetailsBuilder()
          .addFlightInfo(classes.fromToWhere, 'MOW – HKT', '10:45 – 08:00')
          .addFlightInfo(classes.journey, 'В пути', '21ч 15м')
          .addFlightInfo(classes.transfers, '2 пересадки', 'HKG, JNB')
          .build()
        }
        {
          this.flightTicketDetailsBuilder()
            .addFlightInfo(classes.fromToWhere, 'MOW – HKT', '11:20 – 00:50')
            .addFlightInfo(classes.journey, 'В пути', '13ч 30м')
            .addFlightInfo( classes.transfers, '1 пересадки', 'HKG')
            .build()
        }
      </div>
    );
  }
}
