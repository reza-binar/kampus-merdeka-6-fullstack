import axios from "axios";
import { toast } from "react-toastify";
import { setToken } from "../reducers/auth";

export const login = (email, password) => async (dispatch) => {
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

        // redirect to home
        // navigate("/"); // it will be not consistent, so alternative we use window until we used the state management
        window.location = "/"; // temporary solution
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
};
