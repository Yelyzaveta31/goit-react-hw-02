const Feedback = ({ feedback }) => {
  return (
    <>
      <ul>
        {Object.entries(feedback).map((item, index) => {
          const [key, value] = item;
          return (
            <li key={index}>
              {key}:{value}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Feedback;
