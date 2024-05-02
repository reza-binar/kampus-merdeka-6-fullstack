import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
    students: [],
    student: null,
};

// Define the slice
const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
        setStudents: (state, action) => {
            state.students = action.payload;
        },
        setStudent: (state, action) => {
            state.student = action.payload;
        },
    },
});

// export the setter funtion
export const { setStudents, setStudent } = studentSlice.actions;

// export the reducer
export default studentSlice.reducer;
