import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
    const {feedback} = useContext(FeedbackContext);

    const total = feedback?.reduce((acc, cur) => acc + cur.rating, 0) || 0;
    const average = feedback?.length ? (total / feedback.length).toFixed(1).replace(/[.,]0$/, '') : 0;

    return (
        <div className="feedback-stats">
            <h4>{feedback?.length || 0} Reviews</h4>
            <h4>Average Rating: {average}</h4>
        </div>
    );
}

export default FeedbackStats;
