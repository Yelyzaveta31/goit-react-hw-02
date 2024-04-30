import { useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const handleClick = (feedback) => {
    setFeedback((prev) => ({ ...prev, [feedback]: prev[feedback] + 1 }));
  };
  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description />
      <Options handleClick={handleClick} onReset={handleReset} />
      <Feedback feedback={feedback} />
    </>
  );
}

export default App;
