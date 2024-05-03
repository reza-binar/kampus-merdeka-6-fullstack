import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getProfile } from "../../redux/actions/auth";

const Protected = ({ children, roles }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        // get user profile if we have token
        dispatch(getProfile(navigate, null, "/login"));
    }, [dispatch, navigate]);

    useEffect(() => {
        if (user?.role) {
            // check if the user has access to this pages or not
            if (roles?.length > 0) {
                if (!roles?.includes(user?.role)) {
                    navigate("/");
                }
            }
        }
    }, [navigate, roles, user]);

    return children;
};

Protected.propTypes = {
    roles: PropTypes.array,
};

export default Protected;
