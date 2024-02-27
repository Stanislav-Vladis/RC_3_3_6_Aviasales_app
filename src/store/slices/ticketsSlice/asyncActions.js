import axios from 'axios';

import { setCompleted, setError, setItems } from './tickets.slice';

const fetchTickets = () => async dispatch => {
	const { data } = await axios.get('https://aviasales-test-api.kata.academy/search');
	let tickets = [];

	do {
		try {
			const ticketsRequest = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${data.searchId}`);
			tickets = ticketsRequest.data;
			if (tickets === undefined) {
				dispatch(setError());
				break;
			}
			dispatch(setItems(tickets.tickets));
		} catch (error) {
			const statusCode = error.message.match(/\b(\d{3})\b/)[0];
			if (statusCode < 500) {
				dispatch(setError());
				break;
			}
		}
	} while (!tickets.stop);

	tickets.stop ? dispatch(setCompleted()) : null;
};

export default fetchTickets;
