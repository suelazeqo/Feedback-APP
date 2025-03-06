import {useState, useContext, useEffect} from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

    useEffect(() => {
        if (feedbackEdit.edit) {
            setBtnDisabled(false);
            setText(feedbackEdit.item.text || '');
            setRating(feedbackEdit.item.rating || 10);
        }
    }, [feedbackEdit]);

    const handleTextChange = (e) => {
        const inputText = e.target.value;
        setText(inputText);

        if (!inputText.trim()) {
            setBtnDisabled(true);
            setMessage('');
        } else if (inputText.trim().length <= 10) {
            setMessage('Text must be at least 10 characters');
            setBtnDisabled(true);
        } else {
            setMessage('');
            setBtnDisabled(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {text, rating};

            if (feedbackEdit.edit) {
                updateFeedback(feedbackEdit.item.id, newFeedback);
            } else {
                addFeedback(newFeedback);
            }

            resetForm();
        }
    };

    const resetForm = () => {
        setText('');
        setRating(10);
        setBtnDisabled(true);
        setMessage('');
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate our service with us?</h2>
                <RatingSelect select={setRating}/>
                <div className="input-group">
                    <input
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Write a review"
                        value={text}
                    />
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    );
};

export default FeedbackForm;
