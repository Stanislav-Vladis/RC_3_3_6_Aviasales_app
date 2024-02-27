// eslint-disable-next-line import/namespace
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
	status: 'loading', // loading | completed | error
};

const ticketsSlice = createSlice({
	name: 'tickets',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = [...state.items, ...action.payload];
			state.status = 'loading';
		},
		setCompleted(state) {
			state.status = 'completed';
		},
		setError(state) {
			state.status = 'error';
		},
	},
});

export const { setItems, setCompleted, setError } = ticketsSlice.actions;
export default ticketsSlice.reducer;
