import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

function Login() {
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

        // make loading
        setIsLoading(true);

        let data = new FormData();
        data.append("email", email);
        data.append("password", password);
        data.append("name", name);
        if (photo) {
            data.append("photo", photo);
        }

        let config = {
            method: "post",
            url: `${import.meta.env.VITE_BACKEND_API}/api/auth/register`,
            data: data,
        };

        try {
            const response = await axios.request(config);

            // get and save the token to local storage
            const { data } = response.data;
            const { token } = data;
            localStorage.setItem("token", token);

            // redirect to home
            // navigate("/"); // it will be not consistent, so alternative we use window until we used the state management
            window.location = "/"; // temporary solution
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }

        setIsLoading(false);
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
        </Form>
    );
}

export default Login;
