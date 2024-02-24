import React from "react";
import classNames from 'classnames';
import classes from './flight-checkbox-selection.module.scss';

export default class FlightCheckboxSelection extends React.Component {
  createLabelContainers(labels) {
    return labels.map((label, index) => (
      <div key={index} className={classes.labelContainer}>
        <div className={classes.labelContainer__badge}>
          <input id={index} type="checkbox" defaultChecked={false} className={classes.labelContainer__badgeCheckbox} />
          <img className= {classNames(classes.labelContainer__imagePlaceholder, classes.labelContainer__imgContent)} alt="checkbox" />
        </div>
        <label htmlFor={index} className={classes.labelContainer__stopoverLabel}>{label}</label>
      </div>
    ));
  }

  render() {
    const labels = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

    return (
      <div className={classes.flightCheckboxContainer__stopsFilter}>
        <p className={classes.flightCheckboxContainer__title}>Количество пересадок</p>
        {this.createLabelContainers(labels)}
      </div>
    );
  }
}
