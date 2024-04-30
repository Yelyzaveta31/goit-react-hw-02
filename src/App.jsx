import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  useEffect(() => {
    localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };
  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = () => {
    return Object.values(feedback).reduce((acc, item) => {
      return acc + item;
    }, 0);
  };
  const total = totalFeedback();

  const positiveFeedback = () => {
    const goodPoints = feedback.good;
    if (total === 0) {
      return 0;
    }
    return Math.round((goodPoints / total) * 100);
  };
  const positive = positiveFeedback();
  return (
    <>
      <Description />
      <Options
        feedback={feedback}
        onUpdate={updateFeedback}
        onReset={handleReset}
        total={total}
      />
      {total > 0 ? (
        <Feedback
          feedback={Object.entries(feedback)}
          positive={positive}
          total={total}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
