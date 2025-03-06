import {createContext, useState, useEffect} from "react";

const FeedbackContext = createContext();
const API_URL = "http://localhost:5000/feedback";

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState({item: {}, edit: false});

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const response = await fetch(`${API_URL}?_sort=id&_order=desc`);
                const data = await response.json();
                setFeedback(data);
            } catch (error) {
                console.error("Error fetching feedback:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchFeedback();
    }, []);

    const addFeedback = async (newFeedback) => {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newFeedback),
            });
            const data = await response.json();
            setFeedback((prevFeedback) => [data, ...prevFeedback]);
        } catch (error) {
            console.error("Error adding feedback:", error);
        }
    };

    const editFeedback = (item) => {
        setFeedbackEdit({item, edit: true});
    };

    const updateFeedback = async (id, updItem) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(updItem),
            });
            const data = await response.json();
            setFeedback((prevFeedback) =>
                prevFeedback.map((item) => (item.id === id ? {...item, ...data} : item))
            );
        } catch (error) {
            console.error("Error updating feedback:", error);
        }
    };

    const deleteFeedback = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            try {
                await fetch(`${API_URL}/${id}`, {method: "DELETE"});
                setFeedback((prevFeedback) => prevFeedback.filter((item) => item.id !== id));
            } catch (error) {
                console.error("Error deleting feedback:", error);
            }
        }
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                isLoading,
                addFeedback,
                editFeedback,
                updateFeedback,
                deleteFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
