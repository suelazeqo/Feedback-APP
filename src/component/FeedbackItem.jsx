import PropTypes from "prop-types";
import Card from "./shared/Card";
import {FaTimes} from "react-icons/fa";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
const {deleteFeedback} =useContext(FeedbackContext)
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={()=> deleteFeedback(item.id)} className="close"><FaTimes/></button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
}

FeedbackItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    }).isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default FeedbackItem;
