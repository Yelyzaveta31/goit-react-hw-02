import s from "./Feedback.module.css";
const Feedback = ({ feedback, total, positive }) => {
  return (
    <>
      <ul className={s.feedbackList}>
        {Object.entries(feedback).map((item, index) => {
          const [key, value] = item;
          return (
            <li key={index}>
              {key}:{value}
            </li>
          );
        })}
        <li>Total: {total}</li>
        <li>Positive: {positive}%</li>
      </ul>
    </>
  );
};

export default Feedback;
