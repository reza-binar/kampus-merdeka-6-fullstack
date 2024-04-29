import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Nav, Navbar } from "react-bootstrap";
import { getProfile } from "../../redux/actions/auth";

const NavbarComponent = () => {
    const dispatch = useDispatch();

    const { user, token } = useSelector((state) => state.auth);

    useEffect(() => {
        // get user profile if we have token
        dispatch(getProfile());
    }, [dispatch, token]);

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
