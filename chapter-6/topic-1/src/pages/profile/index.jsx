import { useEffect, useState } from "react";
import { Row, Col, Card, Form, Image } from "react-bootstrap";
import axios from "axios";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getProfile = async (token) => {
        setIsLoading(true);

        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${import.meta.env.VITE_BACKEND_API}/api/auth/profile`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const response = await axios.request(config);
            const { data } = response.data;

            // set user by response
            setUser(data);
        } catch (error) {
            // because token is not valid, we will delete it from local storage
            setUser(null);
            localStorage.removeItem("token");
        }

        setIsLoading(false);
    };

    useEffect(() => {
        // get user profile if we have token
        const token = localStorage.getItem("token");
        if (token) {
            getProfile(token);
        }
    }, []);

    return (
        <Row>
            <Col md={6} className="offset-md-3">
                <Card>
                    <Card.Header>My Profile</Card.Header>
                    <Card.Body>
                        <Form>
                            {isLoading ? (
                                <>
                                    <h2>Loading...</h2>
                                </>
                            ) : (
                                <>
                                    <Image
                                        src={user?.photo}
                                        className="img-fluid"
                                        rounded
                                    />

                                    <div className="mt-4">
                                        <Form.Group
                                            className="mb-3"
                                            controlId="name"
                                        >
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={user?.name}
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="email"
                                        >
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                value={user?.email}
                                                disabled
                                            />
                                        </Form.Group>
                                    </div>
                                </>
                            )}
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Profile;
