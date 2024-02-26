export default class AviasalesService {
	async fetchingSearchId(dispatch, getSearchId, showErrorMessage) {
		console.log("sjsjsj");
		try {
			const response = await fetch('https://aviasales-test-api.kata.academy/search');
			console.log(response);
			const json = await response.json();
			return dispatch(getSearchId(json.searchId));
		} catch (err) {
			return dispatch(showErrorMessage());
		}
	}

	async fetchingTickets(dispatch, getState, isTicketsLoaded, getTickets, showErrorMessage, fetchTickets) {
		console.log("sddddd");
		try {
			const {searchId} = getState();
			const url = `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`;
			let response = await fetch(url);

			console.log(response);
			while (response.status === 500) response = await fetch(url);

			const json = await response.json();
			if (json.stop) {
				console.log('stop: true');
				return dispatch(isTicketsLoaded(true));
			}
			dispatch(getTickets(json.tickets));
			return dispatch(fetchTickets());
		} catch (err) {
			return dispatch(showErrorMessage());
		}
	}
}
