// eslint-disable-next-line import/namespace
import { createSlice } from '@reduxjs/toolkit';

import { filterCheckboxes } from '../../utils/localData';

const initialState = {
	filterBy: [...filterCheckboxes.map(item => item.id)],
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setFilter(state, action) {
			const { id } = action.payload;

			if (id === 0) {
				if (state.filterBy.includes(0)) {
					state.filterBy = [];
				} else {
					state.filterBy = [0, 1, 2, 3, 4];
				}
			} else {
				if (state.filterBy.includes(id)) {
					state.filterBy = state.filterBy.filter(item => item !== id && item !== 0);
				} else {
					state.filterBy = [...state.filterBy, id];

					const containsAllNumbers = [...initialState.filterBy.slice(1)].every(num => state.filterBy.includes(num));
					if (containsAllNumbers && !state.filterBy.includes(0)) {
						state.filterBy = [...state.filterBy, 0];
					}
				}
			}
		},
	},
});
export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
