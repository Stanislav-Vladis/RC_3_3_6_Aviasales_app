import React from 'react';
import logo from '../../assets/logo.svg';
import classes from './app.module.scss';
import FlightCheckboxSelection from "../flight-checkbox-selection/FlightCheckboxSelection.jsx";
import FlightOptionsRenderer from "../flight-options-renderer/FlightOptionsRenderer.jsx";

export default class App extends React.Component {

  render() {
    return (
      <>
        <div className={classes.logoContainer}>
          <img src={logo} className={classes.logoContainer__img} alt="logo" />
        </div>
        <div className={classes.aviasalesContainer}>
          <div className={classes.flightCheckboxContainer}>
            <FlightCheckboxSelection />
          </div>
          <div className={classes.ticketListContainer}>
            <FlightOptionsRenderer flightTicketOptions={"flightTicketOptions"} />
          </div>
        </div>
      </>
    );
  }
}
