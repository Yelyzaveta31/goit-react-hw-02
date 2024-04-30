const Options = ({ handleClick, onReset }) => {
  return (
    <div>
      <button onClick={() => handleClick("good")}>Good</button>
      <button onClick={() => handleClick("neutral")}>Neutral</button>
      <button onClick={() => handleClick("bad")}>Bad</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Options;
