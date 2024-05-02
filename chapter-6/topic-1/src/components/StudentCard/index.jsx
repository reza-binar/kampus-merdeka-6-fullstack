import { Col, Card, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StudentCard = ({ student }) => {
    return (
        <Col md={4} as={Link} to={`/students/${student?.id}`}>
            <Card>
                <Card.Header>{student?.name}</Card.Header>
                <Card.Body>
                    {student?.photo && (
                        <Image
                            src={student?.photo}
                            className="img-fluid"
                            rounded
                        />
                    )}

                    <div className={student?.photo && "mt-4"}>
                        <h5>{student?.name}</h5>
                        <h6>{student?.class?.name}</h6>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

StudentCard.propTypes = {
    student: PropTypes.object,
};

export default StudentCard;
