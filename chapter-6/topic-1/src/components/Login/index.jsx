import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        // make loading
        setIsLoading(true);

        /* login action (fetch api) */
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
            console.log(JSON.stringify(response.data));
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }

        setIsLoading(false);
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                    We will never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={isLoading}>
                {isLoading ? "Processing..." : "Submit"}
            </Button>
        </Form>
    );
}

export default Login;
