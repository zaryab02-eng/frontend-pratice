import { useState } from "react";

const App = () => {
  const [num, setNum] = useState([1, 2, 3]);
  const [nextNum, setNextNum] = useState(4);

  const addNum = () => {
    setNum([...num, nextNum]);
    setNextNum(nextNum + 1);
  };

  return (
    <>
      {num.map((nums, idx) => (
        <p key={idx}>{nums}</p>
      ))}
      <button onClick={addNum}>Add Next Number</button>
    </>
  );
};

export default App;
