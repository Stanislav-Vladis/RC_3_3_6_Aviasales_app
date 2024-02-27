// eslint-disable-next-line import/namespace
import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './slices/filters.slice';
import sortReducer from './slices/sort.slice';
import ticketsReducer from './slices/ticketsSlice/tickets.slice';

const store = configureStore({
	reducer: {
		sort: sortReducer,
		filter: filterReducer,
		tickets: ticketsReducer,
	},
});

export default store;
