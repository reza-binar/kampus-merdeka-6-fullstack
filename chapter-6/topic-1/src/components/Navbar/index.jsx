import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Nav, Navbar } from "react-bootstrap";
// import { useSelector } from "react-redux";

const NavbarComponent = () => {
    // const { token } = useSelector((state) => state.auth);

    const [user, setUser] = useState(null);

    const getProfile = async (token) => {
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
    };

    useEffect(() => {
        // get user profile if we have token
        const token = localStorage.getItem("token");
        if (token) {
            getProfile(token);
        }
    }, []);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Kampus Merdeka
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        {user ? (
                            <>
                                <Nav.Link as={Link} to="/profile">
                                    {user?.name}
                                </Nav.Link>
                                <Nav.Link
                                    onClick={() => {
                                        localStorage.removeItem("token");
                                        window.location = "";
                                    }}
                                >
                                    Logout
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/register">
                                    Register
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
