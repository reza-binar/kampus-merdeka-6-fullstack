import LoginComponent from "../../components/Login";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Login = () => {
    return (
        <Row>
            <Col md={6} className="offset-md-3">
                <Card>
                    <Card.Header>Login</Card.Header>
                    <Card.Body>
                        <LoginComponent />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Login;
