import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProfile } from "../../redux/actions/auth";

const NonProtected = ({ children }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfile(navigate, "/", null));
    }, [dispatch, navigate]);

    return children;
};

export default NonProtected;
