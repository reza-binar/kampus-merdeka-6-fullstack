import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

// this will make a global state/temporary database in frontend
export default configureStore({
    devTools: true, // to enable/disable devtools in chrome/firefox/etc
    reducer: reducers, // state database
});
