import { createSlice } from "@reduxjs/toolkit";

export const globalReducer = createSlice({
	name: "global",
	initialState: {
		auth: false,
		user: {},
		redirect: null,
	},
	reducers: {
		redirectTo: (state, action) => {
			state.redirect = action.payload;
		},
		clearRedirect: (state) => {
			state.redirect = null;
		},
	},
});

// Action creators are generated for each case reducer function
export const { redirectTo, clearRedirect } = globalReducer.actions;

export default globalReducer.reducer;
