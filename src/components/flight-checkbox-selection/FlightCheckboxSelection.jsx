import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from 'classnames';
import classes from './flight-checkbox-selection.module.scss';
import { allTransfers, directTransfer, oneTransfer, threeTransfer, twoTransfer } from "../../reducers/checkbox/checkboxAction";

class FlightCheckboxSelection extends React.Component {
  static propTypes = {
    transferParams: PropTypes.object,
    onTransferFunctions: PropTypes.object
  };

  buildLabel(label, value, func) {
    return {
      label: label,
      value: value,
      func: func
    }
  }

  createLabelContainers(labels) {
    return labels.map((label, index) => (
      <div key={index} className={classes.labelContainer}>
        <div className={classes.labelContainer__badge}>
          <input id={index}
                 className={classes.labelContainer__badgeCheckbox}
                 type="checkbox"
                 checked={label.value}
                 onChange={label.func}
          />
          <img className= {classNames(classes.labelContainer__imagePlaceholder, classes.labelContainer__imgContent)} alt="checkbox" />
        </div>
        <label htmlFor={index} className={classes.labelContainer__stopoverLabel}>{label.label}</label>
      </div>
    ));
  }

  render() {
    const { transferParams, ...onTransferFunctions } = this.props;
    const labels = [
      this.buildLabel('Все', transferParams.all, onTransferFunctions.onAllTransfers),
      this.buildLabel('Без пересадок', transferParams.direct, onTransferFunctions.onDirect),
      this.buildLabel('1 пересадка', transferParams.oneStop, onTransferFunctions.onOneStop),
      this.buildLabel('2 пересадки', transferParams.twoStops, onTransferFunctions.onTwoStops),
      this.buildLabel('3 пересадки', transferParams.threeStops, onTransferFunctions.onThreeStops)
    ];

    return (
      <div className={classes.flightCheckboxContainer__stopsFilter}>
        <p className={classes.flightCheckboxContainer__title}>Количество пересадок</p>
        {this.createLabelContainers(labels)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { transferParams } = state.checkboxReducer;
  return {
    transferParams: transferParams
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    onAllTransfers: () => dispatch(allTransfers()),
    onDirect: () => dispatch(directTransfer()),
    onOneStop: () => dispatch(oneTransfer()),
    onTwoStops: () => dispatch(twoTransfer()),
    onThreeStops: () => dispatch(threeTransfer())
  };
}

//Что такое connect - https://platform.kata.academy/user/courses/3/3/4/12
//Получение функций - https://platform.kata.academy/user/courses/3/3/4/13
export default connect(mapStateToProps, mapDispatchToProps)(FlightCheckboxSelection);