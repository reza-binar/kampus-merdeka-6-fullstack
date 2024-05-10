import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";

// Create the store
const store = configureStore({
    reducer: rootReducers,
    devTools: import.meta.env.MODE == "development",
});

export default store;
