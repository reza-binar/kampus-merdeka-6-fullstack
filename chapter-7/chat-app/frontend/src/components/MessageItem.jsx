import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

function MessageItem({ data }) {
    return <Card body>{data.message}</Card>;
}

MessageItem.propTypes = {
    data: PropTypes.object,
};

export default MessageItem;
