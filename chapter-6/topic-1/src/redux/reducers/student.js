import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
    students: [],
};

// Define the slice
const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
        setStudents: (state, action) => {
            state.students = action.payload;
        },
    },
});

// export the setter funtion
export const { setStudents } = studentSlice.actions;

// export the reducer
export default studentSlice.reducer;
