import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./Slices/globalSlice";

export default configureStore({
	reducer: {
		global: globalReducer,
	},
});
