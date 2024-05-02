import axios from "axios";
import { toast } from "react-toastify";
import { setStudents } from "../reducers/student";

export const getStudents = () => async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://solar-bolt-420712.et.r.appspot.com/api/students",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await axios.request(config);
        const { data } = response.data;

        dispatch(setStudents(data));
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
};
