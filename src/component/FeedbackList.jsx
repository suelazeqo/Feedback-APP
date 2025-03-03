import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList({ feedback, handleDelete }) {
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>;
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        key={item.id} // Keep key only on motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FeedbackItem item={item} handleDelete={handleDelete} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ).isRequired, // Make sure this is required
    handleDelete: PropTypes.func.isRequired, // Ensure this prop is also required
};

export default FeedbackList;
