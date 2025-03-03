import PropTypes from "prop-types";
import Card from "./shared/Card";
import {FaTimes} from "react-icons/fa";

function FeedbackItem({ item, handleDelete }) {

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={()=> handleDelete(item.id)} className="close"><FaTimes/></button>
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
