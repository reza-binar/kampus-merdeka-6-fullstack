import { useEffect } from "react";
import { Row, Col, Card, Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getStudent } from "../../redux/actions/student";

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const { student } = useSelector((state) => state.student);

    useEffect(() => {
        // get student details by params id
        dispatch(getStudent(navigate, id));
    }, [dispatch, id, navigate]);

    return (
        <Row>
            <Col md={6} className="offset-md-3">
                <Card>
                    <Card.Header>{student?.name}</Card.Header>
                    <Card.Body>
                        <Form>
                            {!student ? (
                                <>
                                    <h2>Loading...</h2>
                                </>
                            ) : (
                                <>
                                    {student?.photo && (
                                        <Image
                                            src={student?.photo}
                                            className="img-fluid"
                                            rounded
                                        />
                                    )}

                                    <div className={student?.photo && "mt-4"}>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="name"
                                        >
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={student?.name}
                                                disabled
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="email"
                                        >
                                            <Form.Label>Class</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={student?.class?.name}
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
