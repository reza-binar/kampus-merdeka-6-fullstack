import axios from "axios";
import { toast } from "react-toastify";
import { setToken, setUser } from "../reducers/auth";

export const login = (navigate, email, password) => async (dispatch) => {
    let data = JSON.stringify({
        email,
        password,
    });

    let config = {
        method: "post",
        url: `${import.meta.env.VITE_BACKEND_API}/api/auth/login`,
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
    };

    try {
        const response = await axios.request(config);

        // get and save the token to local storage
        const { data } = response.data;
        const { token } = data;

        // Change the token value in the reducer
        dispatch(setToken(token));
        dispatch(setUser(data?.user));

        // redirect to home
        navigate("/"); // it will be not consistent, so alternative we use window until we used the state management
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
};

export const getProfile = () => async (dispatch, getState) => {
    const state = getState();
    const { token } = state.auth;

    let config = {
        method: "get",
        url: `${import.meta.env.VITE_BACKEND_API}/api/auth/profile`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await axios.request(config);
        const { data } = response.data;
        console.log(data);

        // set user by response
        dispatch(setUser(data));
    } catch (error) {
        // because token is not valid, we will delete it from local storage
        dispatch(setUser(null));
        localStorage.removeItem("token");
    }
};
