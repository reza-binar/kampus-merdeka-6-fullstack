import axios from "axios";
import { toast } from "react-toastify";
import { setStudents } from "../reducers/student";

export const getStudents = () => async (dispatch) => {
    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://solar-bolt-420712.et.r.appspot.com/api/students",
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTcxNDY0NzYzMSwiZXhwIjoxNzE0NjUxMjMxfQ.a4ro0m6vEohjiuVtPNgQZfFEQmr7A6ltGNV5frvE_t4",
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
