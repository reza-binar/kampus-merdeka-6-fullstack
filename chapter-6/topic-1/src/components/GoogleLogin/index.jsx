import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../../redux/actions/auth";

const GoogleLogin = ({ text }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: (codeResponse) =>
            dispatch(loginWithGoogle(navigate, codeResponse?.access_token)),
    });

    return (
        <Button variant="secondary" onClick={() => login()}>
            {text}
        </Button>
    );
};

GoogleLogin.propTypes = {
    text: PropTypes.string,
};

export default GoogleLogin;
