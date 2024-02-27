export default function sorter(tickets, sort, filterBy) {
	if (!tickets) return tickets;
	const result = [...tickets];

	if (sort === 'cheapest') {
		result.sort((a, b) => a.price - b.price);
	} else if (sort === 'fast') {
		result.sort((a, b) => {
			const aDuration = a.segments.reduce((total, segment) => total + segment.duration, 0);
			const bDuration = b.segments.reduce((total, segment) => total + segment.duration, 0);
			return aDuration - bDuration;
		});
	} else if (sort === 'optimal') {
		result.sort((a, b) => {
			const aTotalDuration = a.segments.reduce((total, segment) => total + segment.duration, 0);
			const bTotalDuration = b.segments.reduce((total, segment) => total + segment.duration, 0);

			if (a.price !== b.price) {
				return a.price - b.price;
			} else if (aTotalDuration !== bTotalDuration) {
				return aTotalDuration - bTotalDuration;
			}
		});
	}

	return result.filter(ticket => filterBy.includes(stops(ticket)));
}

function stops(ticket) {
	return ticket.segments.reduce((totalStops, segment) => totalStops + segment.stops.length, 1);
}
