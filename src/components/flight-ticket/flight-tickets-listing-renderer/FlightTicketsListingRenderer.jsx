import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addMinutes, format, parseISO } from "date-fns";
import classes from './flight-tickets-listing-renderer.module.scss';
import FlightTicketDisplay from "../flight-ticket-display/FlightTicketDisplay.jsx";
import { fetchTickets } from "../../../reducers/tickets/ticketsAction";

class FlightTicketsListingRenderer extends React.Component /*({ flightTicketOptions })*/ {
  constructor(props) {
    super(props);
    this.state = {
      currentFilteredTickets: [],
      visibleTickets: 5
    };
  }

  static propTypes = {
    transferParams: PropTypes.object,
    activeTab: PropTypes.string,
    allTickets: PropTypes.object,
    onFetchTickets: PropTypes.func,
  };

  buildTimeObject(segments) {
    const { date, duration } = segments;
    const parseStartDate = parseISO(date);
    const startTime = format(parseStartDate, 'HH:mm');
    const endDate = addMinutes(parseStartDate, duration);
    const endTime = format(endDate, 'HH:mm');

    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return {
      flightHours: `${startTime} - ${endTime}`,
      travelTime: `${hours}ч ${minutes}м`
    };
  }

  buildTicketInfo(data) {
    const travelTo = data.segments[0];
    const travelFrom = data.segments[1];
    const buildTimeTo = this.buildTimeObject(travelTo);
    const buildTimeFrom = this.buildTimeObject(travelFrom);

    return {
      logo: `https://pics.avs.io/99/36/${data.carrier}.png`,
      price: data.price.toLocaleString(),
      routeTo: `${travelTo.origin} - ${travelTo.destination}`,
      flightHoursTo: buildTimeTo.flightHours,
      travelTimeTo: buildTimeTo.travelTime,
      routeFrom: `${travelFrom.origin} - ${travelFrom.destination}`,
      flightHoursFrom: buildTimeFrom.flightHours,
      travelTimeFrom: buildTimeFrom.travelTime,
      countTransfersTo: travelTo.stops ? travelTo.stops.length : 0,
      transfersTo: travelTo.stops.length > 0 ? travelTo.stops.join(', ') : '-',
      countTransfersFrom: travelFrom.stops ? travelFrom.stops.length : 0,
      transfersFrom: travelFrom.stops.length > 0 ? travelFrom.stops.join(', ') : '-'
    };
  }

  loadMoreTickets = () => {
    this.setState((prevState) => ({
      visibleTickets: prevState.visibleTickets + 5
    }));
  };

  componentDidMount() {
    this.props.onFetchTickets();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.allTickets !== this.props.allTickets) {
      this.setState({
        currentFilteredTickets: this.props.allTickets
      });
    }
  }

  render() {
    const { currentFilteredTickets } = this.state;
    console.log(currentFilteredTickets);

    return (
      <div className={classes.flightTicketListingContainer__tickets}>
        {currentFilteredTickets?.tickets?.map((data, index) => {
          const ticketInfo = this.buildTicketInfo(data);
          return <FlightTicketDisplay key={index} ticketInfo={ticketInfo} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { transferParams } = state.checkboxReducer;
  const activeTab = state.sortingReducer;
  const allTickets = state.ticketsReducer;
  return {
    transferParams: transferParams,
    activeTab: activeTab,
    allTickets: allTickets
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    onFetchTickets: () => dispatch(fetchTickets())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightTicketsListingRenderer);
