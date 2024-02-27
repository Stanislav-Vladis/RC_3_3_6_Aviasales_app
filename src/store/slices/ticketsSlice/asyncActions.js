import axios from 'axios';

import { setCompleted, setError, setItems } from './tickets.slice';

let searchId = null;

const getSearchId = async () => {
	if (searchId) {
		return searchId;
	}
	const { data } = await axios.get('https://aviasales-test-api.kata.academy/search');
	searchId = data.searchId;
};

const fetchTickets = () => async dispatch => {
	let tickets = [];

	do {
		try {
			await getSearchId();
			const ticketsRequest = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
			tickets = ticketsRequest.data;
			if (tickets === undefined) {
				dispatch(setError());
				break;
			}
			dispatch(setItems(tickets.tickets));
		} catch (error) {
			if (!error.message.includes('500')) {
				dispatch(setError());
				break;
			}
		}
	} while (!tickets.stop);

	tickets.stop ? dispatch(setCompleted()) : null;
};

export default fetchTickets;
