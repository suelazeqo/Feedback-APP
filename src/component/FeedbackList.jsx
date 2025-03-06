import {motion, AnimatePresence} from "framer-motion";
import {useContext} from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

const FeedbackList = () => {
    const {feedback, isLoading} = useContext(FeedbackContext);

    if (isLoading) return <Spinner/>;
    if (!feedback?.length) return <p>No Feedback Yet</p>;

    return (
        <AnimatePresence>
            {feedback.map((item) => (
                <motion.div
                    key={item.id}
                    initial={{opacity: 0, y: -10}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -10}}
                    transition={{duration: 0.3}}
                >
                    <FeedbackItem item={item}/>
                </motion.div>
            ))}
        </AnimatePresence>
    );
};

export default FeedbackList;
