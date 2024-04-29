import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
    token: localStorage.getItem("token") || null,
    user: null,
};

// [token, setToken] = useState(localStorage.getItem("token") || null)
// [user, setUser] = useState(null)

/* 
    -- action.payload -> setToken("euyasd1309e190ds")
                      -> setUser({id:1,"email": "a@example.com"})
*/

// Define the slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            if (action.payload) {
                localStorage.setItem("token", action.payload);
            } else {
                localStorage.removeItem("token");
            }

            state.token = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

// export the setter funtion
export const { setToken, setUser } = authSlice.actions;

// export the reducer
export default authSlice.reducer;
