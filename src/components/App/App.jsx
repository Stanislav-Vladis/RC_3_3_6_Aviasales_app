import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import PropTypes from "prop-types";

import { fetchSearchId, fetchTickets } from '../../actions';
import ErrorMessage from '../ErrorMessage';
import Filters from '../Filters';
import Sort from '../Sort';
import TicketsList from '../TicketsList';
import logo from '../../assets/logo.svg';

import classes from './App.module.scss';

const App = ({ isErrorMessage, ticketsLoaded, fetchSearchId, fetchTickets }) => {
	useEffect(() => () => fetchSearchId().then(() => fetchTickets()), []);

	const err = (
		<section className={classes.mainWrapper}>
			<ErrorMessage message="Something goes wrong..." description="Something goes wrong, try again later..." />
		</section>
	);

	const content = (
		<section className={classes.mainWrapper}>
			<section className={classes.filtersWrapper}>
				<Filters />
			</section>
			<section className={classes.sortTicketsWrapper}>
				<Sort />
				<TicketsList />
			</section>
		</section>
	);

	return (
		<div className={classes.mainBackground}>
			<div className={classes.planeLogo}>
				<img src={logo} alt="plane logo" />
				{ticketsLoaded || isErrorMessage ? null : (
					<Spin size="large" tip="Loading tickets..." className={classes.spinner} />
				)}
			</div>
			{isErrorMessage ? err : content}
		</div>
	);
};

App.propTypes = {
	isErrorMessage: PropTypes.bool,
	ticketsLoaded: PropTypes.bool,
	fetchSearchId: PropTypes.func,
	fetchTickets: PropTypes.func,
};

const mapStateToProps = ({ error, ticketsLoaded }) => ({ isErrorMessage: error, ticketsLoaded });

export default connect(mapStateToProps, { fetchSearchId, fetchTickets })(App);
