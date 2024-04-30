import s from "./Options.module.css";
const Options = ({ onUpdate, onReset, feedback, total }) => {
  return (
    <>
      <ul className={s.list}>
        {Object.keys(feedback).map((item) => {
          return (
            <li className={s.item} key={item}>
              <button className={s.btn} onClick={() => onUpdate(item)}>
                {item}
              </button>
            </li>
          );
        })}
        {total > 0 && (
          <button className={s.btn} onClick={onReset}>
            Reset
          </button>
        )}
      </ul>
    </>
  );
};

export default Options;
