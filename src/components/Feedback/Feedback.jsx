import s from "./Feedback.module.css";
const Feedback = ({ feedback, total, positive }) => {
  return (
    <>
      <ul className={s.feedbackList}>
        {feedback.map((item, index) => {
          const [key, value] = item;
          return (
            <li className={s.item} key={index}>
              {key}:{value}
            </li>
          );
        })}
        <li className={s.item}>Total:{total}</li>
        <li className={s.item}>Positive: {positive}%</li>
      </ul>
    </>
  );
};

export default Feedback;
