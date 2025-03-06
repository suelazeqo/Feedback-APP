import PropTypes from "prop-types";
import Card from "./shared/Card";
import {FaTimes, FaEdit} from "react-icons/fa";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({item}) => {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext);

    return (
        <Card>
            <div className="num-display">{item.rating}</div>

            <button
                onClick={() => deleteFeedback(item.id)}
                className="close"
                aria-label="Delete feedback"
            >
                <FaTimes color="purple"/>
            </button>

            <button
                onClick={() => editFeedback(item)}
                className="edit"
                aria-label="Edit feedback"
            >
                <FaEdit color="purple"/>
            </button>

            <div className="text-display">{item.text}</div>
        </Card>
    );
};

FeedbackItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    }).isRequired,
};

export default FeedbackItem;
