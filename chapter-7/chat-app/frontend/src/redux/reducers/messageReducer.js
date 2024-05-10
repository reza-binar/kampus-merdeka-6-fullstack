import { createSlice } from "@reduxjs/toolkit";

// The initial state when the application load in first time
const initialState = {
    messages: [],
};

// Define the reducers
const messageSlicer = createSlice({
    name: "message",
    initialState,
    reducers: {
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
    },
});

// Export the reducer function, the functions will be called in actions
export const { setMessages } = messageSlicer.actions;

// Export the reducer to combine it with another reducers
export default messageSlicer.reducer;
