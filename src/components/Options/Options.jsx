import s from "./Options.module.css";
const Options = ({ handleClick, onReset }) => {
  return (
    <>
      <button className={s.btn} onClick={() => handleClick("good")}>
        Good
      </button>
      <button className={s.btn} onClick={() => handleClick("neutral")}>
        Neutral
      </button>
      <button className={s.btn} onClick={() => handleClick("bad")}>
        Bad
      </button>
      <button className={s.btn} onClick={onReset}>
        Reset
      </button>
    </>
  );
};

export default Options;
