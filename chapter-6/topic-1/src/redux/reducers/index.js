import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import student from "./student";

// it will combining some reducers that will be possible to call in the jsx files
export default combineReducers({
    auth,
    student,
});
