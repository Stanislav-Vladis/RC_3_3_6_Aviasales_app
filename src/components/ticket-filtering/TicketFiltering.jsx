import React from 'react';
import classNames from 'classnames';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classes from './ticket-filtering.module.scss';
import { sorting } from "../../reducers/sorting/sortingAction";

class TicketFiltering extends React.Component {
  static propTypes = {
    activeTab: PropTypes.string,
    onSorting: PropTypes.func
  };

  buildClassNames = (idCurrentButton) => {
    const { activeTab } = this.props;

    let builder = classNames(classes.ticketFilteringContainer__button);
    switch (idCurrentButton) {
      case 'cheapest':
        if (activeTab === 'Самый дешевый') {
          builder = classNames(builder, classes.active);
        }
        return builder;
      case 'fastest':
        if (activeTab === 'Самый быстрый') {
          builder = classNames(builder, classes.active);
        }
        return builder;
      case 'optimal':
        if (activeTab === 'Оптимальный') {
          builder = classNames(builder, classes.active);
        }
        return builder;
      default:
        return builder;
    }
  }

  buildButton(id, text) {
    const { onSorting } = this.props;

    return (
      <button
        id={id}
        className={this.buildClassNames(id)}
        onClick={(event) => onSorting(event.target.textContent)}
      >
        {text}
      </button>
    );
  }

  render() {

    return (
      <div className={classes.ticketFilteringContainer}>
        {this.buildButton('cheapest', 'Самый дешевый')}
        {this.buildButton('fastest', 'Самый быстрый')}
        {this.buildButton('optimal', 'Оптимальный')}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const activeTab = state.sortingReducer;
  return {
    activeTab: activeTab
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    onSorting: (tab) => dispatch(sorting(tab)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketFiltering);
