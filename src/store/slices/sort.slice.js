// eslint-disable-next-line import/namespace
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	sortBy: 'cheapest',
};

const sortingSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		setSort(state, action) {
			state.sortBy = action.payload;
		},
	},
});
export const { setSort } = sortingSlice.actions;
export default sortingSlice.reducer;
