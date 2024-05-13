import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/auth";
import GoogleLogin from "../GoogleLogin";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [photo, setPhoto] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (password != confirmPassword) {
            toast.error(`Password and confirm password must be same!`);
            return;
        }

        // dispatch the register action
        dispatch(
            register(navigate, email, password, name, photo, setIsLoading)
        );
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name *</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address *</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Form.Text className="text-muted">
                    We will never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password *</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm Password *</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="photo" className="mb-3">
                <Form.Label>Photo</Form.Label>
                <Form.Control
                    type="file"
                    onChange={(e) => setPhoto(e.target.files[0])}
                />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isLoading}>
                {isLoading ? "Processing..." : "Register"}
            </Button>
            {"   Or   "}
            <GoogleLogin text={"Register with Google"} />
        </Form>
    );
}

export default Login;
