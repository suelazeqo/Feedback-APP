import {motion, AnimatePresence} from "framer-motion";
import {useContext} from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList({handleDelete}) {
    const {feedback} = useContext(FeedbackContext);

    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>;
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -10}}
                        transition={{duration: 0.3}}
                    >
                        <FeedbackItem item={item} handleDelete={handleDelete}/>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

export default FeedbackList;
